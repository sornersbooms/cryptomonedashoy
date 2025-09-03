'use client';

import { usePathname } from 'next/navigation';
import AprendeNavbar from '@/components/AprendeNavbar';
import courseData from '@/lib/courseData';

export default function AprendeLayout({ children }) {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const courseSlug = pathSegments[2];

  const currentCourse = courseData[courseSlug];

  return (
    <div>
      <AprendeNavbar />
      <main style={{ flexGrow: 1, padding: '20px' }}>
        {children}
      </main>
    </div>
  );
}