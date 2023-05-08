import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thakurgaon Polytechnic Institute,Thakurgaon',
  description: 'বাংলাদেশের উত্তরবঙ্গের ঠাকুরগাঁও জেলায় অবস্থিত ঠাকুরগাঁও পলিটেকনিক ইনস্টিটিউট , ২০০৪ সালে উদ্বোধনের মাধ্যমে এর যাত্রা শুরু হয় । কম্পিউটার টেকনোলজি, ফুড টেকনোলজি, আর্কিটেকচার এন্ড ইন্টেরিয়র ডিজাইন টেকনোলজি, রেফ্রিজারেশন এন্ড এয়ারকন্ডিশনিং টেকনোলজি এই চারটি টেকনোলজি নিয়ে কার্যক্রম শুরু করে। ২০১৬ সালে মেকাট্রনিক্স টেকনোলজি নামে নতুন একটি টেকনোলজি ঠাকুরগাঁও পলিটেকনিক ইনস্টিটিউটে সংযুক্ত হয়, বর্তমানে এখানে পাঁচটি টেকনোলজিতে শিক্ষা কার্যক্রম চলমান আছে । বর্তমানে আনুমানিক ২২০০ ছাত্র-ছাত্রী একাডেমিক কার্যক্রমের সাথে সংযুক্ত আছে এবং প্রায় ১০ হাজারের মতো ছাত্র-ছাত্রী শিক্ষা কার্যক্রম শেষ করে বের হয়ে দেশের বিভিন্ন জায়গায় সুনামের সাথে তাদের কাজ করে যাচ্ছে এবং দেশের উন্নয়নে যথাযথ ভূমিকা পালন করছে। অত্র ইনস্টিটিউটে অত্যাধুনিক কম্পিউটার ল্যাব, ইন্টেরিয়র এন্ড আর্কিটেকচার ডিজাইন ল্যাব , আইএলও প্রদত্ত আন্তর্জাতিক মানের ফুড ল্যাব সহ যথেষ্ট ল্যাব এর ব্যবস্থা আছে যা ছাত্র-ছাত্রীদের সুষ্ঠু শিক্ষাক্রম পরিচালনার জন্য গুরুত্বপূর্ণ ভূমিকা পালন করছে।',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
            <body className={inter.className}>{children}</body>
    </html>
  )
}
