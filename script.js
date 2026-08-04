// منع القائمة عند الضغط بالزر الأيمن
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// منع اختصارات لوحة المفاتيح
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
    }
    if (e.key === 'F12') {
        e.preventDefault();
    }
});