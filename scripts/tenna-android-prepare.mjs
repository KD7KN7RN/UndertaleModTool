import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve('External/tenna-editor');
const i18n = resolve(root, 'src/i18n/index.ts');
const ui = resolve(root, 'src/store/ui.ts');
const app = resolve(root, 'src/App.tsx');
const vite = resolve(root, 'vite.config.ts');
const ar = resolve(root, 'src/i18n/locales/ar.json');

const translations = {
  "ui.settings.title":"الإعدادات","ui.settings.general":"عام","ui.settings.sound":"الصوت","ui.settings.soundEffects":"المؤثرات الصوتية",
  "ui.settings.language":"اللغة","ui.settings.languageDescription":"اختر لغة المحرر. الترجمات غير المتوفرة تعود إلى الإنجليزية.",
  "ui.settings.languagePlaceholder":"اختر اللغة...","ui.settings.backupRestore":"النسخ الاحتياطي والاستعادة",
  "ui.settings.exportAllSaves":"تصدير جميع ملفات الحفظ","ui.settings.importSaves":"استيراد ملفات الحفظ",
  "ui.nav.about":"حول","ui.nav.armors":"الدروع","ui.nav.attributions":"الاعتمادات","ui.nav.changelog":"سجل التغييرات",
  "ui.nav.chapter1":"الفصل 1","ui.nav.chapter2":"الفصل 2","ui.nav.chapter3":"الفصل 3","ui.nav.chapter4":"الفصل 4","ui.nav.chapter5":"الفصل 5",
  "ui.nav.consumables":"المستهلكات","ui.nav.flags":"الأعلام","ui.nav.home":"الرئيسية","ui.nav.inventory":"المخزون",
  "ui.nav.keyItems":"العناصر المهمة","ui.nav.kris":"كريس","ui.nav.license":"الترخيص","ui.nav.lightWorld":"العالم المضيء",
  "ui.nav.noelle":"نوال","ui.nav.overview":"نظرة عامة","ui.nav.party":"الفريق","ui.nav.ralsei":"رالسِي","ui.nav.recruits":"المجندون",
  "ui.nav.settings":"الإعدادات","ui.nav.story":"القصة","ui.nav.susie":"سوزي","ui.nav.weapons":"الأسلحة","ui.nav.welcome":"مرحبًا",
  "ui.common.noOptionsFound":"لم يتم العثور على خيارات","ui.common.unknown":"غير معروف","ui.common.empty":"فارغ","ui.common.invalid":"غير صالح",
  "ui.common.none":"لا شيء","ui.common.selectOption":"اختر خيارًا...","ui.common.back":"رجوع","ui.common.next":"التالي",
  "ui.common.tryAgain":"حاول مرة أخرى","ui.common.cancel":"إلغاء","ui.common.close":"إغلاق","ui.common.delete":"حذف",
  "ui.common.gotIt":"فهمت","ui.common.noSaves":"لا توجد ملفات حفظ...","ui.common.help":"مساعدة","ui.common.loading":"جارٍ التحميل...",
  "ui.common.uploadFile":"رفع ملف","ui.common.dropFileHere":"أسقط الملف هنا!","ui.common.dragDropFileHere":"اسحب ملفًا وأفلته هنا",
  "ui.common.clickToSelectFile":"أو اضغط لاختيار ملف","ui.common.editorLoading":"جارٍ تحميل المحرر...",
  "ui.header.downloadSave":"تنزيل ملف الحفظ","ui.header.moreActions":"المزيد من الإجراءات","ui.header.redo":"إعادة",
  "ui.header.toggleSidebar":"إظهار/إخفاء الشريط الجانبي","ui.header.undo":"تراجع","ui.header.uploadSave":"رفع ملف الحفظ",
  "ui.upload.chapter":"الفصل","ui.upload.chooseFilesArchives":"اختر ملفات أو أرشيفات","ui.upload.chooseFolder":"اختر مجلدًا",
  "ui.upload.clearSelection":"مسح التحديد","ui.upload.confirmChapter":"تأكيد الفصل","ui.upload.selectChapter":"اختر الفصل",
  "ui.upload.selectSave":"اختر ملف حفظ","ui.upload.uploadFailed":"فشل الرفع","ui.upload.uploadSave":"رفع ملف الحفظ",
  "ui.home.chapter":"الفصل","ui.home.createdAt":"أُنشئ في: {date}","ui.home.deleteSave":"حذف ملف الحفظ",
  "ui.home.general":"عام","ui.home.meta":"بيانات وصفية","ui.home.modifiedAt":"عُدّل في: {date}",
  "ui.home.noSaveLoaded":"لم يتم تحميل ملف حفظ","ui.home.saveDeleted":"تم حذف ملف الحفظ.","ui.home.source":"المصدر:",
  "ui.home.welcomeTitle":"مرحبًا","ui.home.welcomeDescription":"Tenna Editor أداة متقدمة لتعديل ملفات حفظ DELTARUNE.",
  "ui.lightWorld.items":"العناصر","ui.lightWorld.phoneContacts":"جهات اتصال الهاتف","ui.party.member":"العضو",
  "ui.party.level":"المستوى {level}","ui.party.slot":"الخانة {slot}","ui.recruits.cafe":"المقهى","ui.recruits.recruited":"تم تجنيده",
  "ui.recruits.notRecruited":"غير مجند","ui.story.searchFields":"حقول البحث","ui.story.searchPlaceholder":"ابحث في حقول القصة...",
  "ui.field.armor":"الدرع","ui.field.currentRoom":"الغرفة الحالية","ui.field.money":"النقود (D$)","ui.field.name":"الاسم",
  "ui.field.playerName":"اسم اللاعب","ui.field.playtime":"وقت اللعب","ui.field.plotPoint":"نقاط القصة","ui.field.recruited":"مجند",
  "ui.field.saveName":"اسم الحفظ","ui.field.slot":"الخانة","ui.field.spell":"التعويذة","ui.field.status":"الحالة","ui.field.weapon":"السلاح",
  "ui.stats.attack":"الهجوم","ui.stats.defence":"الدفاع","ui.stats.magic":"السحر","ui.stats.experience":"الخبرة",
  "ui.stats.currentHp":"الصحة الحالية","ui.stats.maxHp":"الصحة القصوى","ui.stats.level":"المستوى","ui.stats.enterValue":"أدخل قيمة...",
  "ui.flags.descriptionColumn":"الوصف","ui.flags.flagColumn":"العلم","ui.flags.idColumn":"المعرّف","ui.flags.valueColumn":"القيمة",
  "ui.flags.searchPlaceholder":"ابحث عن علم...","ui.flags.apply":"تطبيق","ui.flags.applied":"تم التطبيق",
  "ui.flags.manualEdit":"تعديل يدوي","ui.flags.knownValues":"القيم المعروفة:","ui.flags.noFlagsFound":"لم يتم العثور على أعلام.",
  "ui.backup.noSavesToExport":"لا توجد ملفات حفظ لتصديرها","ui.save.switchedTo":"تم التبديل إلى ملف الحفظ '{name}'",
  "ui.storage.loadFailed":"تعذر تحميل بيانات الحفظ","ui.storage.saveFailed":"تعذر حفظ بيانات الحفظ",
  "ui.storage.removeFailed":"تعذر حذف بيانات الحفظ","ui.sw.updating":"جارٍ تحديث المحرر...",
  "ui.sw.updated":"تم تحديث المحرر إلى الإصدار {version}"
};

writeFileSync(ar, JSON.stringify(translations, null, 2) + '\n');

let c = readFileSync(i18n, 'utf8');
c = c.replace("import it from './locales/it.json';", "import it from './locales/it.json';\nimport ar from './locales/ar.json';");
c = c.replace("  it: {\n    displayName: 'Italian',\n    flag: 'it',\n  },", "  it: {\n    displayName: 'Italian',\n    flag: 'it',\n  },\n  ar: {\n    displayName: 'العربية',\n    flag: 'sa',\n  },");
c = c.replace("  ko,\n  it,", "  ko,\n  it,\n  ar,");
c = c.replace("document.documentElement.lang = locale === 'en' ? 'en' : locale;", "document.documentElement.lang = locale === 'en' ? 'en' : locale;");
writeFileSync(i18n, c);

let u = readFileSync(ui, 'utf8').replace("locale: 'en',", "locale: 'ar',");
writeFileSync(ui, u);

let a = readFileSync(app, 'utf8');
a = a.replace("document.documentElement.lang = locale === 'en' ? 'en' : locale;", "document.documentElement.lang = locale === 'en' ? 'en' : locale;\n    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';");
writeFileSync(app, a);

let v = readFileSync(vite, 'utf8');
if (!v.includes("base: './'")) v = v.replace("export default defineConfig({", "export default defineConfig({\n  base: './',");
writeFileSync(vite, v);
