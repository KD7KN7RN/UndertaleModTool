using Android.App;
using Android.OS;
using Android.Webkit;
using Android.Views;
using Android.Graphics;
using Android.Content.PM;

namespace UndertaleModToolAvalonia.Android;

[Activity(
    Label = "محرر DELTARUNE",
    Theme = "@style/AppTheme",
    Exported = false,
    ScreenOrientation = ScreenOrientation.Unspecified)]
public class TennaEditorActivity : Activity
{
    WebView? webView;

    protected override void OnCreate(Bundle? savedInstanceState)
    {
        base.OnCreate(savedInstanceState);

        webView = new WebView(this);
        webView.Settings.JavaScriptEnabled = true;
        webView.Settings.DomStorageEnabled = true;
        webView.Settings.AllowFileAccess = true;
        webView.Settings.AllowContentAccess = false;
        webView.Settings.DatabaseEnabled = true;
        webView.Settings.SetSupportZoom(false);
        webView.SetBackgroundColor(Color.Transparent);

        SetContentView(webView);
        webView.LoadUrl("file:///android_asset/Tenna/index.html");
    }

    public override void OnBackPressed()
    {
        if (webView?.CanGoBack() == true)
            webView.GoBack();
        else
            base.OnBackPressed();
    }

    protected override void OnDestroy()
    {
        if (webView is not null)
        {
            webView.StopLoading();
            webView.Destroy();
            webView = null;
        }

        base.OnDestroy();
    }
}
