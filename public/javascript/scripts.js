const init = () => {
  let demo1 = ""
  $.get('images/demo1.txt', (data)=>{
    demo1 = data;
    $('.display').html(demo1)
    start();
  })

  let next = $('.next');
  let demo2 = '';
  // demo1 =  document.getElementById("1").innerHTML;
  $.get('images/demo.txt', (data)=>{
    demo2 = data;
  })
  isDemo1 = true;
  next.click(()=>{
    if(isDemo1){
      $('.display').html(demo2)
      start()
      isDemo1 =false;
    }else{
      $('.display').html(demo1);
      start()
      isDemo1 = true
    }
   
  })
  next.click(()=>{
    console.log("next Clicked!")
  })

}

const start  = () => {
  let tmax_opts = {
    delay: 0.5,
    repeat: -1,
    repeatDelay: 0.1,
    yoyo: true
  };
  
  let tmax_tl           = new TimelineMax(tmax_opts),
      ployhead_shapes   = $('polygon').add('polyline'),
      ployhead_stagger  = 0.00475,
      ployhead_duration = 1.5;
  
  let ployhead_staggerFrom = {
    scale: 0,
    opacity: 0,
    transformOrigin: 'center center',
  };
  
  let ployhead_staggerTo = {
    opacity: 1,
    scale: 1,
    ease: Elastic.easeInOut
  };
  
  tmax_tl.staggerFromTo(ployhead_shapes, ployhead_duration, ployhead_staggerFrom, ployhead_staggerTo, ployhead_stagger, 0);
}


$(document).ready(init);
