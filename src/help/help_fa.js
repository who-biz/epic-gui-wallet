const messages = [
  {
    title: 'فرستادن سکه ها',
    text: `.دستور فرستادن اولین پله در ساختن یک تراکنش تعاملی است<br/>
    <br/>
تراکنش ها میتوانند آنی و توسط استفاده از شبکه تور و یا آدرس
http(s)
صورت بگیرند، و یا بصورت دستی با معاوضه کردن فایل صورت بگیرد<br/><br/>
برای شروع تراکنش، مطمئن شوید که نود یا گره سرور شما کاملا سینک یا همگام سازی شده است<br/></br>
    در سرور نود شما باید کلمه
    “synced“
    نوشته شده باشد <br/><br/>آدرس گیرنده میتواند هم شبکه پیازی تور و یا هر آدرس 
    http(s)
    خارجی ای باشد <br/>
    <br/>
    برای اثبات اینکه معامله انجام شده، آدرس اثبات ارائه شده توسط گیرنده را، وارد کنید
<br/>`,
  },
  {
    title: ' دریافت سکه ها Receive coins',
    text: 
` برای دریافت سکه ها، کیف پول شما باید در حالت گوش دادن یا
listen mode
باشد <br/><br/>
    هر بار که شنونده را شروع/راه‌اندازی مجدد می‌کنید، آدرس 
    ngrok
    شما تغییر می‌کند، بنابراین هر بار آن را کپی کنید
<br/><br/>
تنظیمات پیش‌فرض کیف پول، حالت شنیدن/دریافت را به‌طور پیش‌فرض فعال می‌کند <br/><br/>
این ویژگی را می توان در تنظیمات تغییر داد <br/><br/>
در صفحه دریافت، لیستی از آدرس هایی وجود دارد که می توان از آنها برای دریافت سکه استفاده کرد <br/><br/>
آدرس اثبات شما نیز در این صفحه نمایش داده می شود <br/><br/>
اگر مشکلی پیش آمد و کیف پول شما سکه دریافت نکرد، شنونده را در صفحه دریافت، مجدداً راه اندازی کنید<br/>`
  },
  {
    title: ' تراکنش آفلاین را نهایی کنید Finalize offline transaction',
    text: `
برای نهایی کردن تراکنش آفلاین، از این صفحه برای وارد کردن فایل نهایی شده استفاده کنید <br/>
فایل تراکنش ارائه شده توسط گیرنده <br/>`
  },
  {
    title: 'تراکنش آفلاین را وارد کنید  Import offline transaction',
    text: `
از این صفحه برای وارد کردن فایل تراکنش ارائه شده توسط گیرنده، استفاده کنید <br/>
    <br/>
    پس از وارد کردن فایل تراکنش، یک فایل تراکنش نهایی را ذخیره کرده و به فرستنده تحویل دهید <br/>`
  },
  {
    title: 'دفترچه آدرس Address book',
    text: `
مخاطبین خود و آدرس آنها را در دفترچه آدرس ذخیره کنید<br/>
    <br/>
اگر بعداً تصمیم گرفتید تراکنش دیگری انجام دهید، می توانید آدرس مخاطب را در قسمت آدرس گیرنده جستجو کنید <br/>`
  },
  {
    title: ' شناسه یا آی دی تراکنش Transaction ID',
    text: `
شناسه تراکنش، شناسه منحصر به‌ فردی برای هر تراکنش است که توسط گیرنده و فرستنده به اشتراک گذاشته شده است <br/>`
  },
  {
    title: ' شناسه سکه Coin ID',
    text: ` آی دی سکه، شناسه منحصر به فرد سکه های شما در بلاک چین است <br/>
    فقط شما می توانید مقدار یا ارزش شناسه سکه را ببینید <br/>`
  },
  {
    title: 'شنونده کیف پول Wallet listener',
    text: `
شنونده کیف، پول باید برای دریافت سکه از کیف پول های دیگر در حال اجرا باشد <br/>
    <br/>
  شنونده را می توان در صفحه دریافت استارت یا متوقف کرد <br/><br/>
هر بار که شنونده را استارت یا شروع می کنید، آدرس 
ngrok
شما تغییر می کند `
  },
  {
    title: ' حساب Account',
    text: `
نام کاربری و نام حساب 
keybase
خود را در حساب تنظیم کنید <br/>
    <br/>
نام کاربری در بالای برنامه نمایش داده می شود <br/>`
  },
  {
    title: 'تنظیمات',
    text: `
در اینجا می توانید تنظیمات انجام شده در طی فرآیند راه اندازی کیف پول را تغییر دهید <br/>`
  },
  {
    title: ' سرور نود Node Server',
    text: `
این مکان سرور گره یا نود شما است<br/>
    <br/>
یک سرور گره برای ارسال و دریافت سکه توسط کیف پول مورد نیاز است <br/>
    <br/>
شما می توانید بین سرور نود داخلی در کیف شما و یا سرور گره یا نود خارجی، یکی را انتخاب کنید <br/><br/>
 اگر این تنظیم را تغییر دادید، لطفا کیف پول خود را مجددا راه اندازی کنید <br/>`
  },
  {
    title: 'Your Ngrok Authtoken',
    text: `
داشتن
Auth-token
در سرویس 
Ngrok
برای پیدا کردن کیف پول کامپیوتر شما ضروری می باشد <br/><br/>
اگر نمی خواهید از سرویس 
ngrok
استفاده کنید، قسمت 
"Ngrok Authtoken"
را خالی بگذارید<br/>`
  },
  {
    title: ' وارد کردن تراکنش آفلاین Import offline transaction',
    text: `
اگر شخصی برای شما فایل تراکنش آفلاین ارسال کند، شما میتوانید آن را در صفحه" وارد کردن تراکنش آفلاین" وارد کنید <br/>
    <br/>
پس از وارد کردن آن، باید یک فایل تراکنش نهایی جدید را ذخیره کنید و آن را برای فرستنده ارسال کنید <br/>`
  },
  {
    title: 'عبارات بازیابی Mnemonic Words',
    text: `عبارات بازیابی، کلماتی هستند که برای بازیابی کیف پول خود به آن نیاز دارید
از این کلمات به همان ترتیبی که نمایش داده می شوند یک نسخه پشتیبان تهیه کنید. روی کاغذ آنها بنویسید، اسکرین شات بگیرید و فایل تصویر را ذخیره کنید و غیره
<br/>
    <br/>
بعداً اگر اطلاعات کیف پول خود را گم کردید، می توانید کیف پول را بازیابی کنید <br/>
   با این کلمات <br/>`
  },
  {
    title: 'ارسال گواهی پرداخت و اثبات آدرس',
    text: `
در اپیک می توانید با یک گواهی اضافی تراکنش انجام دهید <br/>
    <br/>
با یک گواهی یا مدرک این امکان برای دیگران بوجود می آید که تأیید کنند، که معامله بین فرستنده و گیرنده انجام شده است <br/>
    <br/>
برای تأیید یک گواهی، کاربر به اطلاعات گواهی و تعداد سکه نیاز دارد <br/>`
  },
  {
    title: ' شبکه تور Tor',
    text: `
به طور پیش فرض می توانید تراکنش ها را از طریق آدرس تور، ارسال و دریافت کنید <br/><br/>
آدرس  تور خود را در صفحه "دریافت" پیدا خواهید کرد <br/>`
  },
  {
    title: 'Ngrok',
    text: `
 ngrok
 سرویسی است که یک آدرس عمومی ای ارائه می دهد که به آدرس آی پی خصوصی پشت مودم کیف پول شما پیوند داده شده است <br/><br/> 
شما میتوانید آدرس 
ngrok
را با فرستندگان به کیف پول شما، به اشتراک بگذارید یا از آن به عنوان آدرس دریافت در صرافی ها، استفاده کنید<br/>`
  },
  {
    title: ' گره یا نود شبکه Network node',
    text: `
یک نود شبکه سروری است که داده های بلاک چین را ذخیره می کند <br/><br/>
کیف پول شما دارای یک نود داخلی است که می توانید از آن استفاده کنید و یا شما میتوانید یک نود خارجی را که
روی کامپیوتر دیگری در حال اجراست انتخاب کنید و یا میتوانید یک نود عمومی خارجی را انتخاب کنید <br/><br/>
اولین باری که گره داخلی خود کیف را اجرا می کنید، تقریباً 2 ساعت برای سینک کردن و همگام سازی داده های بلاک چین، طول می کشد`
  },
  {
    title: ' جفت ها Peers',
    text: `
همتایان، نودهای شبکه دیگری هستند که به نود شبکه شما متصل هستند <br/>`
  },
  {
    title: 'ارتفاع بلاک چین',text: `ارتفاع بلاک چین آخرین عدد بلاک در زنجیره است. هر 60 ثانیه بلاک چین اپیک یک بلاک جدید ایجاد می کند و مقدار ارتفاع تغییر می کند<br/>`
  },
  /* use this for new topic
  {
    title: 'topic',
    text: `can be html too`
  },
  */
];

export default messages
