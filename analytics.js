// إنشاء وتضمين سكربت Google Analytics تلقائياً
(function() {
    // 1. حقن مكتبة جوجل في رأس الصفحة (head)
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-72KM3WGRYW';
    document.head.appendChild(script);

    // 2. إعداد الدوال والبيانات المطلوبة
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-72KM3WGRYW');
})();