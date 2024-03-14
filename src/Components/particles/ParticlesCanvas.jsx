import React, { useEffect, useRef } from "react";
import "./particle.css";
const ParticleAnimation = () => {
  const canvasRef = useRef(null);
  let canvas, context, particles;

  useEffect(() => {
    const init = () => {
      canvas = canvasRef.current;
      context = canvas.getContext("2d");
      particles = [];

      setBoundary();
      window.addEventListener("resize", setBoundary);

      // Create particles
      for (let i = 0; i < particleDensity; i++) {
        particles.push(new Particle(particleColor));
      }

      moveParticle();
    };

    const setBoundary = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const moveParticle = () => {
      context.fillStyle = motionBlur ? "rgba(0, 0, 31, 0.5)" : "rgb(0, 0, 31)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.move();
      });

      if (collisionDetection) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            particles[i].detectCollision(particles[j]);
          }
        }
      }

      requestAnimationFrame(moveParticle);
    };

    const Particle = function (particleColor) {
      this.posX = Math.floor(Math.random() * window.innerWidth) + 1;
      this.posY = Math.floor(Math.random() * window.innerHeight) + 1;
      this.speed = 4;
      this.velocityX = (Math.random() - 0.5) * this.speed;
      this.velocityY = (Math.random() - 0.5) * this.speed;
      this.color = particleColor;

      this.draw = function () {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.posX, this.posY, particleSize, 0, Math.PI * 2);
        context.fill();
      };

      this.move = function () {
        this.posX += this.velocityX;
        this.posY += this.velocityY;

        if (
          this.posX >= window.innerWidth - particleSize ||
          this.posX <= particleSize
        ) {
          this.velocityX *= -1;
        }
        if (
          this.posY >= window.innerHeight - particleSize ||
          this.posY <= particleSize
        ) {
          this.velocityY *= -1;
        }

        this.draw();
      };

      this.findDistance = function (particle1) {
        return Math.round(
          Math.sqrt(
            Math.pow(this.posX - particle1.posX, 2) +
              Math.pow(this.posY - particle1.posY, 2)
          )
        );
      };

      this.detectCollision = function (particle1) {
        const distance = this.findDistance(particle1);
        if (distance <= 2 * particleSize) {
          const temp = this.velocityX;
          this.velocityX = particle1.velocityX;
          particle1.velocityX = temp;
        }
      };
    };

    const particleDensity = 25;
    const motionBlur = true;
    const particleSize = 3;
    const collisionDetection = true;
    const particleColor = "rgb(193, 52, 66)";

    init();

    return () => {
      window.removeEventListener("resize", setBoundary);
    };
  }, []);

  return <canvas id="canvas" ref={canvasRef}></canvas>;
};

export default ParticleAnimation;
