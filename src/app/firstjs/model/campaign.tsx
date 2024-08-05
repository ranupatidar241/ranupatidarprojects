"use client";  
import 'bootstrap/dist/css/bootstrap.min.css';
import './firstjs/styles/internal.css';


export default class Content {
  title: string;
  description: string;
  cta: string;

  constructor(
    title: string = '',
    description: string = '',
    cta: string = ''
  ) {
    this.title = title;
    this.description = description;
    this.cta = cta;
  }
}