import { lazy } from 'react';
const About = lazy(()=> import('../pages/About'));
const Contact = lazy(()=> import('../pages/Contact'));
const Footer = lazy(()=> import('../pages/Footer'));
const Header = lazy(()=> import('../pages/Header'));
const  Hero = lazy(()=> import('../pages/Hero'));
const Project = lazy(()=> import('../pages/Project'));
const Skill = lazy(()=> import("../pages/Skill"));
import { socialLinks } from '../constants';
import { useFormik } from 'formik';
import Validation from '../schema/Validation';
import emailjs from '@emailjs/browser';
import { projects } from '../constants';
import { Lens } from '../components/Lens';

export {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Project,
  Skill,
  socialLinks,
  useFormik,
  Validation,
  emailjs,
  projects,
  Lens,
};
