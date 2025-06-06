import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Asesorías Digital | Consultoría y Estrategia para tu Negocio',
  description: 'Impulsa tu negocio con asesoría estratégica, transformación digital y casos de éxito comprobados. Resultados medibles y atención personalizada.',
  openGraph: {
    title: 'Asesorías Digital',
    description: 'Consultoría estratégica, transformación digital y resultados medibles. Más de 500 proyectos exitosos.',
    url: 'https://asesoriasdigital.com',
    siteName: 'Asesorías Digital',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Asesorías Digital - Consultoría y Estrategia',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asesorías Digital',
    description: 'Consultoría estratégica, transformación digital y resultados medibles.',
    images: ['/og-image.webp']
  },
};

import WhatsAppFloat from "@/components/ui/whatsapp-float";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" role="document">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ff6600" />
        <meta name="color-scheme" content="light dark" />
        <meta name="format-detection" content="telephone=no, email=no" />
        <meta name="author" content="Asesorías Digital" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/og-image.webp" as="image" type="image/webp" />
      </head>
      <body className={inter.className + " bg-white text-gray-900 antialiased min-h-screen"} style={{backgroundColor:'#fff', color:'#181818'}}>
        <main role="main" tabIndex={-1} aria-label="Contenido principal">
          {children}
        </main>
        <WhatsAppFloat aria-label="Botón de WhatsApp para contacto directo" />
      </body>
    </html>
  );
}
