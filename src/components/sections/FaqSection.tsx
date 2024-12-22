"use client";

import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Berapa lama waktu yang dibutuhkan untuk pembuatan website?",
    answer:
      "Waktu pengerjaan website bervariasi tergantung kompleksitas proyek, umumnya membutuhkan waktu 4-8 minggu dari analisis awal hingga peluncuran. Kami akan memberikan timeline yang lebih spesifik setelah berdiskusi tentang kebutuhan website Anda.",
  },
  {
    question: "Apakah saya bisa update konten website saya sendiri?",
    answer:
      "Ya, setiap website yang kami bangun dilengkapi dengan sistem manajemen konten (CMS) yang user-friendly. Kami juga akan memberikan panduan dan pelatihan singkat agar Anda dapat mengelola konten dengan mudah (Paket custom).",
  },
  {
    question: "Apakah website yang dibuat responsive untuk mobile?",
    answer:
      "Ya, semua website yang kami kembangkan bersifat responsive dan dapat diakses dengan optimal di berbagai perangkat, baik desktop, tablet, maupun smartphone.",
  },
  {
    question: "Apakah termasuk layanan SEO?",
    answer:
      "Ya, kami menerapkan praktik SEO dasar dalam setiap pengembangan website. Untuk optimasi SEO yang lebih mendalam, kami menyediakan paket layanan SEO terpisah yang dapat disesuaikan dengan kebutuhan Anda.",
  },
  {
    question: "Bagaimana dengan keamanan website?",
    answer:
      "Kami menerapkan standar keamanan terkini dalam setiap website yang kami bangun, termasuk SSL certificate dan praktik keamanan web terbaik untuk melindungi data Anda dan pengunjung website.",
  },
  {
    question: "Apakah ada layanan maintenance setelah website selesai?",
    answer:
      "Ya, kami menyediakan paket maintenance bulanan yang mencakup update sistem, backup rutin, dan dukungan teknis untuk memastikan website Anda tetap berjalan optimal.",
  },
  {
    question: "Apakah termasuk pembuatan konten website?",
    answer:
      "Ya, kami menyediakan layanan pembuatan konten sebagai layanan tambahan. Tim copywriter kami siap membantu menciptakan konten yang menarik dan sesuai dengan brand Anda.",
  },
  {
    question: "Bagaimana jika saya ingin menambah fitur di kemudian hari?",
    answer:
      "Website yang kami bangun bersifat scalable, sehingga memungkinkan untuk penambahan fitur di kemudian hari. Kami akan membantu menganalisis dan mengimplementasikan fitur baru sesuai kebutuhan Anda.",
  },
  {
    question: "Apakah saya bisa melihat progress pembuatan website?",
    answer:
      "Ya, kami memberikan akses ke platform manajemen proyek di mana Anda bisa melihat progress pengerjaan dan berkomunikasi langsung dengan tim kami.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-[50px] mx-[25px] tablet:my-[100px] tablet:mx-[50px] laptop:mx-[70px] desktop:mx-[150px] flex flex-col items-center laptop:items-start">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-urbanist font-bold mb-8">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center w-full py-4 text-left hover:text-gray-600 transition-colors duration-200"
              >
                <span className=" font-urbanist font-bold text-base pr-8">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <IoRemove className="flex-shrink-0 w-5 h-5" />
                ) : (
                  <IoAdd className="flex-shrink-0 w-5 h-5" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="pb-4 font-poppins font-normal text-xs">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
