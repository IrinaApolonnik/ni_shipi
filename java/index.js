$(document).ready(function(){

  $(".cart1").click(function(){
     $(".ic1").toggleClass("add");
     $(".bu1").toggleClass("add");
     $(".cart1 p").html("Добавлено в корзину");
   });
 $(".cart2").click(function(){
    $(".ic2").toggleClass("add");
    $(".bu2").toggleClass("add");
    $(".cart2 p").html("Добавлено в корзину");
  });
  $(".cart3").click(function(){
     $(".ic3").toggleClass("add");
     $(".bu3").toggleClass("add");
     $(".cart3 p").html("Добавлено в корзину");
   });
 $(".cart4").click(function(){
    $(".ic4").toggleClass("add");
    $(".bu4").toggleClass("add");
    $(".cart4 p").html("Добавлено в корзину");
  });
  $(".cart5").click(function(){
     $(".ic5").toggleClass("add");
     $(".bu5").toggleClass("add");
     $(".cart5 p").html("Добавлено в корзину");
   });
 $(".cart6").click(function(){
    $(".ic6").toggleClass("add");
    $(".bu6").toggleClass("add");
    $(".cart6 p").html("Добавлено в корзину");
  });
  $(".cart7").click(function(){
     $(".ic7").toggleClass("add");
     $(".bu7").toggleClass("add");
     $(".cart7 p").html("Добавлено в корзину");
   });
 $(".cart8").click(function(){
    $(".ic8").toggleClass("add");
    $(".bu8").toggleClass("add");
    $(".cart8 p").html("Добавлено в корзину");
  });
  $(".cart9").click(function(){
     $(".ic9").toggleClass("add");
     $(".bu9").toggleClass("add");
     $(".cart9 p").html("Добавлено в корзину");
   });
  function random(low, high) {
    return Math.random() * (high - low) + low;
  }
  class Visual {
    constructor() {
      this.canvas = document.querySelector("#canvas");
      this.context = this.canvas.getContext("2d");
      this.canvasWidth = 0;
      this.canvasHeight = 0;
      this.particleLength = 150;
      this.particles = [];
      this.particleMaxRadius = 8;

      this.handleMouseMoveBind = this.handleMouseMove.bind(this);
      this.handleClickBind = this.handleClick.bind(this);
      this.handleResizeBind = this.handleResize.bind(this);

      this.initialize();
      this.render();
    }
    initialize() {
      this.resizeCanvas();
      for (let i = 0; i < this.particleLength; i++) {
        this.particles.push(this.createParticle(i));
      }
      this.bind();
    }
    bind() {
      document.body.addEventListener(
        "mousemove",
        this.handleMouseMoveBind,
        false
      );
      document.body.addEventListener("click", this.handleClickBind, false);
      window.addEventListener("resize", this.handleResizeBind, false);
    }

    unbind() {
      document.body.removeEventListener(
        "mousemove",
        this.handleMouseMoveBind,
        false
      );
      document.body.removeEventListener("click", this.handleClickBind, false);
      window.removeEventListener("resize", this.handleResizeBind, false);
    }

    handleMouseMove(e) {
      this.enlargeParticle(e.clientX, e.clientY);
    }

    handleClick(e) {
      this.burstParticle(e.clientX, e.clientY);
    }

    handleResize() {
      this.resizeCanvas();
    }

    resizeCanvas() {
      this.canvasWidth = document.body.offsetWidth;
      this.canvasHeight = document.body.offsetHeight;
      this.canvas.width = this.canvasWidth * window.devicePixelRatio;
      this.canvas.height = this.canvasHeight * window.devicePixelRatio;
      this.context = this.canvas.getContext("2d");
      this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    createParticle(id, isRecreate) {
      const radius = random(1, this.particleMaxRadius);
      const x = isRecreate
        ? -radius - random(0, this.canvasWidth)
        : random(0, this.canvasWidth);
      let y = random(this.canvasHeight / 2 - 150, this.canvasHeight / 2 + 150);
      y += random(-100, 100);
      const alpha = random(0.05, 1);

      return {
        id: id,
        x: x,
        y: y,
        startY: y,
        radius: radius,
        defaultRadius: radius,
        startAngle: 0,
        endAngle: Math.PI * 2,
        alpha: alpha,
        color: { r: random(222, 255), g: random(255, 255), b: 255 },
        speed: alpha + 1,
        amplitude: random(50, 200),
        isBurst: false
      };
    }

    drawParticles() {
      this.particles.forEach((particle) => {
        this.moveParticle(particle);
        this.context.beginPath();
        this.context.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.alpha})`;
        this.context.arc(
          particle.x,
          particle.y,
          particle.radius,
          particle.startAngle,
          particle.endAngle
        );
        this.context.fill();
      });
    }
    moveParticle(particle) {
      particle.x += particle.speed;
      particle.y =
        particle.startY +
        particle.amplitude * Math.sin(((particle.x / 5) * Math.PI) / 180);
    }
    enlargeParticle(clientX, clientY) {
      this.particles.forEach((particle) => {
        if (particle.isBurst) return;
        const distance = Math.hypot(particle.x - clientX, particle.y - clientY);
        if (distance <= 100) {
          const scaling = (100 - distance) / 1.5;
          TweenMax.to(particle, 0.5, {
            radius: particle.defaultRadius + scaling,
            ease: Power2.easeOut
          });
        } else {
          TweenMax.to(particle, 0.5, {
            radius: particle.defaultRadius,
            ease: Power2.easeOut
          });
        }
      });
    }
    burstParticle(clientX, clientY) {
      this.particles.forEach((particle) => {
        const distance = Math.hypot(particle.x - clientX, particle.y - clientY);
        if (distance <= 100) {
          particle.isBurst = true;
          TweenMax.to(particle, 0.5, {
            radius: particle.defaultRadius + 200,
            alpha: 0,
            ease: Power2.easeOut,
            onComplete: () => {
              this.particles[particle.id] = this.createParticle(
                particle.id,
                true
              );
            }
          });
        }
      });
    }
    render() {
      this.context.clearRect(
        0,
        0,
        this.canvasWidth + this.particleMaxRadius * 2,
        this.canvasHeight
      );
      this.drawParticles();
      this.particles.forEach((particle) => {
        if (particle.x - particle.radius >= this.canvasWidth) {
          this.particles[particle.id] = this.createParticle(particle.id, true);
        }
      });
      requestAnimationFrame(this.render.bind(this));
    }
  }
  new Visual();
  "use strict";
  Array.from(document.getElementsByTagName('path')).map(path => {
      console.log(path.getTotalLength());
      const debugPath = path.cloneNode();
      debugPath.classList.add('line--debug');
      if (path.parentNode)
          path.parentNode.insertBefore(debugPath.cloneNode(), path);
  });
  const debugCheckbox = document.getElementById('debug');
  debugCheckbox.addEventListener('change', () => {
      if (debugCheckbox.checked) {
          debugCheckbox.parentElement.classList.add('active');
      }
      else {
          debugCheckbox.parentElement.classList.remove('active');
      }
  });
  let currentActive = 0;
  const checkboxes = document.querySelectorAll('.grid input');
  const autoShow = setInterval(() => {
      checkboxes[currentActive % 4].checked = !checkboxes[currentActive % 4].checked;
      if (!checkboxes[currentActive % 4].checked)
          currentActive += 1;
  }, 1000);
  document.querySelector('.grid').addEventListener('click', () => {
      clearInterval(autoShow);
  });




  // $( ".circlelogo" ).hover(function(){
  //   $(".logo").css("background-image","url(../images/logob.svg)");
  //   $(this).css("background","(#FF7596");
  //    }, function(){
  //      $(".logo").css("background-image","url(../images/logop.svg)");
  //      $(this).css("background","(#DEFFFF)";
  //  });

});
