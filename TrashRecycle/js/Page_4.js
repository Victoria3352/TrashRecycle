var compost = document.querySelector('.compost');
var display_area1 = document.querySelector('.display_area1');
var trash = document.querySelector('.trash');
var nav = document.querySelector('.nav');
var recycle = document.querySelector('.recycle');
var count = 0;
var doc_X = 0;
var doc_y = 0;
$('li').unbind("mousedown").mousedown(function (e) {
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    var x1 = compost.offsetLeft + nav.offsetLeft;
    var y1 = compost.offsetTop + nav.offsetTop;
    var x2 = trash.offsetLeft + nav.offsetLeft;
    var y2 = trash.offsetTop + nav.offsetTop;
    var x3 = recycle.offsetLeft + nav.offsetLeft;
    var y3 = recycle.offsetTop + nav.offsetTop;
    var doc = null;
    var doc1 = null;
 
    if (count === 0) {
        count = 1;
        doc_X = this.offsetLeft;
        doc_y= this.offsetTop;
    }
    doc = this;
    doc1 = this.innerHTML;
    var a = doc_X;
    var b = doc_y;
    
    $(document).mousemove(function (e) {
        doc.style.left = e.pageX - x + 'px';
        doc.style.top = e.pageY - y + 'px';
        window.a = e.pageX - x + display_area1.offsetLeft - 165;
        window.b = e.pageY - y + display_area1.offsetTop + 80;
      
    })
    $(document).off('mouseup');
    $(document).on('mouseup', function () {
        console.log(window.a);
    console.log(x1 + 300);
        if (doc1 === $('.lis1').html() || doc1 === $('.lis3').html() || doc1 === $('.lis12').html() || doc1 === $('.lis14').html() || doc1 === $('.lis18').html()) {
            if (window.a >= x1 && window.a <= x1 + 300 && window.b  >= y1 && window.b <= y1 + 1000) {
                window.a = 0;
                $('.true p').show();
                $('.true p').delay(2000).hide(0);
                doc.style.display = 'none';
                count = 0;
            } else if (window.a >= x2 && window.a <= x2 + 264 && window.b >= y2 && window.b <= y2 + 1000) {
                count = 0;
                $('.false p').show();
                $('.false p').delay(2000).hide(0);
                doc.style.left = a + 'px';
                doc.style.top = b + 'px';
                window.a = 0;
            } else if (window.a >= x3 && window.a <= x3 + 270 && window.b >= y3 && window.b <= y3 + 1000) {
                count = 0;
                doc.style.left = a + 'px';
                doc.style.top = b + 'px';
                $('.false p').show();
                $('.false p').delay(2000).hide(0);
                window.a = 0;
                
            }
        }
        if (doc1 === $('.lis2').html() || doc1 === $('.lis4').html() || doc1 === $('.lis6').html() || doc1 === $('.lis8').html() || doc1 === $('.lis11').html() || doc1 === $('.lis13').html() || doc1 === $('.lis16').html() || doc1 === $('.lis17').html()) {
            if (window.a >= x1 && window.a <= x1 + 300 && window.b >= y1 && window.b <= y1 + 1000) {
                count = 0; 
                window.a = 0;   
                doc.style.left = a + 'px';
                doc.style.top = b + 'px';
                $('.false p').show();
                $('.false p').delay(2000).hide(0);
                
            } else if (window.a >= x2 && window.a <= x2 + 264 && window.b >= y2 && window.b <= y2 + 1000) {
                count = 0;
                window.a = 0;
                doc.style.display = 'none';
                $('.true p').show();
                $('.true p').delay(2000).hide(0);                         
            } else if (window.a >= x3 && window.a <= x3 + 270 && window.b >= y3 && window.b <= y3 + 1000) {
                count = 0;
                window.a = 0;
                doc.style.left = a + 'px';
                doc.style.top = b + 'px';
                $('.false p').show();
                $('.false p').delay(2000).hide(0);   
            }
        }
        if ( doc1 === $('.lis5').html() || doc1 === $('.lis7').html() || doc1 === $('.lis9').html() || doc1 === $('.lis10').html() || doc1 === $('.lis15').html()) {
            if (window.a >= x1 && window.a <= x1 + 300 && window.b >= y1-100 && window.b <= y1 + 1000) {
                window.a = 0;
                count = 0;
                doc.style.left = a + 'px';
                doc.style.top = b + 'px';
                $('.false p').show();
                $('.false p').delay(2000).hide(0);         
            } else if (window.a >= x2 && window.a <= x2 + 264 && window.b >= y2-100 && window.b <= y2 + 1000) {
                count = 0;
                window.a = 0;
                doc.style.left = a + 'px';
                doc.style.top = b + 'px';
                $('.false p').show();
                $('.false p').delay(2000).hide(0);          
            } else if (window.a >= x3 && window.a <= x3 + 270 && window.b >= y3-300 && window.b <= y3 + 1000) {
                count = 0;
                window.a = 0;
                doc.style.display = 'none';
                $('.true p').show();
                $('.true p').delay(2000).hide(0);  
            }
        }
        
        $(document).off('mousemove');
    })
})