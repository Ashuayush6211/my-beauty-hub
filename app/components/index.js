"use client";
import React from 'react';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Beauty Hub</h1>
      <Carousel>
        <CarouselItem>
          <Image
            src="my-beauty-hub\public\Image1.jpg" // Path to your image in the public folder
            alt="First Slide"
            width={800}
            height={400}
          />
          <p>First Slide Text</p>
        </CarouselItem>
        <CarouselItem>
          <Image
            src="my-beauty-hub\public\Image2.jpg"
            alt="Second Slide"
            width={800}
            height={400}
          />
          <p>Second Slide Text</p>
        </CarouselItem>
        <CarouselItem>
          <Image
            src="my-beauty-hub\public\Image4.jpg"
            alt="Third Slide"
            width={800}
            height={400}
          />
          <p>Third Slide Text</p>
        </CarouselItem>
      </Carousel>
    </div>
  );
}