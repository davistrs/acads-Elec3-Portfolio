import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Hero from '../components/hero/hero';
import { ProjectGallery } from '../components/home/project-gallery';

export default component$(() => {
  return (
    <main>
      <Hero />
      <ProjectGallery />
    </main>
  );
});

export const head: DocumentHead = {
  title: 'ELEC3 Cloud Computing Portfolio - Mark Angelo Siazon',
  meta: [
    {
      name: 'description',
      content: 'Cloud Computing and DevOps portfolio featuring hands-on projects in SpringBoot, AWS, Docker, Kubernetes, and Terraform. Showcasing infrastructure as code, containerization, and cloud-native development.',
    },
    {
      name: 'keywords',
      content: 'Cloud Computing, DevOps, AWS, Docker, Kubernetes, Terraform, SpringBoot, Portfolio, Infrastructure as Code, Containerization',
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'ELEC3 Cloud Computing Portfolio - Mark Angelo Siazon',
    },
    {
      property: 'og:description',
      content: 'Cloud Computing and DevOps portfolio featuring hands-on projects in SpringBoot, AWS, Docker, Kubernetes, and Terraform.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'ELEC3 Cloud Computing Portfolio',
    },
    {
      name: 'twitter:description',
      content: 'Cloud Computing and DevOps portfolio featuring hands-on projects.',
    },
    // Copyright and AI Training
    {
      name: 'copyright',
      content: '© 2025 Mark Angelo D. Siazon. All Rights Reserved.',
    },
    {
      name: 'robots',
      content: 'noai, noimageai',
    },
  ],
};
