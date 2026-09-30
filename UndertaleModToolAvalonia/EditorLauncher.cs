using System;

namespace UndertaleModToolAvalonia;

public static class EditorLauncher
{
    public static Action? OpenTennaEditor { get; set; }

    public static bool TryOpenTennaEditor()
    {
        if (OpenTennaEditor is null)
            return false;

        OpenTennaEditor();
        return true;
    }
}
