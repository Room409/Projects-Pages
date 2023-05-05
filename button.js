function swapColors() {
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    
    if (btn1.classList.contains('btn-primary')) {
      btn1.classList.remove('btn-primary');
      btn1.classList.add('btn-secondary');
      btn2.classList.remove('btn-secondary');
      btn2.classList.add('btn-primary');
    } else {
      btn1.classList.remove('btn-secondary');
      btn1.classList.add('btn-primary');
      btn2.classList.remove('btn-primary');
      btn2.classList.add('btn-secondary');
    }
  }