# UndertaleModTool Arabic — Android Edition

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Platform](https://img.shields.io/badge/platform-Android-green)
![Architecture](https://img.shields.io/badge/architecture-arm64%20%7C%20x64-orange)
![Language](https://img.shields.io/badge/interface-Arabic-blueviolet)
![License](https://img.shields.io/github/license/KD7KN7RN/UndertaleModTool)

> **نسخة Android عربية متطورة من UndertaleModTool، مصممة لتوفير بيئة متكاملة لتعديل وفحص ألعاب GameMaker مباشرة من الهاتف.**

## 🇩🇿 عن المشروع

**UndertaleModTool Arabic — Android Edition** هو إصدار عربي مخصص للهواتف من UndertaleModTool، مبني على واجهة **Avalonia** ومهيأ للعمل على Android.

الهدف من المشروع هو نقل تجربة أدوات تعديل ألعاب GameMaker إلى الهاتف مع الحفاظ على وظائف تحرير الموارد، تشغيل السكربتات، وإدارة ملفات الألعاب، مع توفير **واجهة عربية مدمجة** وتجهيزات خاصة ببيئة Android.

المشروع ليس مجرد ترجمة للواجهة؛ بل يتضمن تعديلات وتوافقات مخصصة لبيئة الهاتف، خصوصًا في تشغيل السكربتات والوصول إلى الملفات واستيراد الموارد.

## 📱 التركيز الأساسي: Android

تم تطوير هذا الفرع مع إعطاء Android أولوية خاصة:

- دعم Android 8.0+ (API 28 وما بعده).
- واجهة Avalonia محسنة لتعمل كأداة سطح مكتب على الهاتف.
- دعم معماريات **ARM64 و x64**.
- توافق مع **Android Storage Access Framework (SAF)** للوصول إلى الملفات والمجلدات.
- تشغيل سكربتات C# من الهاتف.
- تضمين ملفات DLL المطلوبة لمحرك السكربتات داخل APK.
- معالجة اختلافات نظام الملفات في Android.
- دعم استيراد وتصدير الموارد من خلال مساحة التخزين التي يحددها المستخدم.
- توافق محسّن مع استيراد **Embedded Textures**.
- حزم Magick.NET الأصلية الخاصة بـAndroid.
- دعم SDL3 على Android.
- إعدادات بناء APK مخصصة لتقليل مشاكل المكتبات الأصلية.

## 🛠️ أدوات تعديل الموارد

يوفر المشروع بيئة متكاملة للعمل مع موارد ألعاب GameMaker، وتشمل:

- Sprites
- Textures / Texture Pages
- Objects
- Rooms
- Code / GML
- Scripts
- Fonts
- Sounds
- Embedded Textures
- GameMaker data files

كما يتضمن أدوات لاستيراد الموارد، معالجة الصور، ونقل صفحات الـTextures.

## ⚡ محرك السكربتات

تم تجهيز نسخة Android لتشغيل سكربتات C# داخل التطبيق.

تشمل تحسينات Android:

- تضمين assemblies المطلوبة لمحرك Roslyn داخل APK.
- استخدام نسخة Roslyn متوافقة مع بيئة Android.
- استخراج مراجع السكربتات إلى مساحة تخزين داخلية قابلة للقراءة.
- دعم مجلدات Android التي لا توفر مسار ملفات تقليديًا.
- معالجة إخراج السكربتات عبر SAF.
- إزالة الاعتماد على Windows Forms من السكربتات التي يجب أن تعمل على Android.

## 🌐 التعريب العربي

النسخة العربية مدمجة داخل المشروع وليست Patch منفصلًا.

يشمل التعريب:

- واجهة التطبيق.
- القوائم والأوامر.
- رسائل النظام.
- نوافذ الأدوات.
- رسائل السكربتات.
- عناصر واجهة تحرير الموارد.

ويتم الاحتفاظ بالتعريب داخل مشروع Localization مستقل مرتبط بالمستودع الرئيسي عبر Git submodule.

## 🔧 إصلاحات وتوافقات Android

هذا الفرع يضيف طبقة توافق خاصة بالهاتف لمعالجة اختلافات Android عن Windows/Linux/macOS، ومنها:

- Android SAF.
- مسارات الملفات غير التقليدية.
- Streams التي لا توفر `Length`.
- تحميل مكتبات السكربتات من داخل APK.
- مكتبات Native الخاصة بالصور والصوت.
- تشغيل السكربتات بدون الاعتماد على مسار تنفيذي تقليدي.
- استيراد Embedded Texture من ملفات Android.

## 🚀 الإصدار 1.0.0

الإصدار **1.0.0** مخصص كنسخة نهائية للمشروع، وليس نسخة تجريبية.

قبل نشر الإصدار، يتم بناء Android في وضع **Release** مع تضمين الموارد والمكتبات المطلوبة.

## 📦 التحميل

الإصدارات الرسمية لهذا الفرع ستكون متاحة من:

**Releases → Android**

سيتم توفير APK مناسب للأجهزة المدعومة وفق المعمارية المطلوبة.

## 💻 المنصات

رغم أن المشروع يركز على Android، فإن البنية الأساسية تدعم أيضًا:

- Windows
- Linux
- macOS
- Android

لكن **Android هو الهدف الرئيسي لهذا الفرع**.

## 🧩 بنية المشروع

المستودع يعتمد على عدة مكونات مترابطة:

- `UndertaleModTool` — الأدوات والسكربتات والموارد الأساسية.
- `UndertaleModToolAvalonia` — واجهة التطبيق متعددة المنصات.
- `UndertaleModToolAvalonia.Android` — طبقة Android وتهيئة APK.
- `UndertaleModLib` — مكتبة التعامل مع ملفات وموارد GameMaker.
- `UndertaleModToolLocalization` — ملفات التعريب والترجمة.

## ⚠️ ملاحظة

هذا المشروع **Fork غير رسمي** من UndertaleModTool. جميع الحقوق المتعلقة بالمشروع الأصلي تعود إلى أصحابها ومساهميها.

هذا الفرع يركز على توفير تجربة عربية وعملية على Android، ولا يدعي أنه الإصدار الرسمي من UndertaleModTool.

## 🙏 Credits

المشروع يعتمد على أعمال ومكونات من:

- UndertaleModTool — المشروع الأصلي.
- Avalonia — واجهة المستخدم متعددة المنصات.
- UndertaleModTool Android/Avalonia contributions.
- Magick.NET — معالجة الصور.
- SDL3 — دعم الوسائط.
- Roslyn — تشغيل وتحليل C#.
- مساهمي مشروع UndertaleModTool ومشاريع Android ذات الصلة.

## 📄 License

هذا المشروع يتبع ترخيص المشروع الأساسي والمكونات المستخدمة فيه. راجع ملف `LICENSE.txt` للتفاصيل.

---

### UndertaleModTool Arabic — Android Edition

**GameMaker Modding • Android • Arabic Localization • C# Scripting • Resource Editing**
