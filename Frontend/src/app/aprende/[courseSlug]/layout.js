import { getCourseData } from '@/lib/courseData';
import { notFound } from 'next/navigation';
import CourseClientLayout from './CourseClientLayout';

export default function CourseLayout({ children, params }) {
  const courseData = getCourseData(params.courseSlug);

  if (!courseData) {
    notFound();
  }

  return (
    <CourseClientLayout courseData={courseData}>
      {children}
    </CourseClientLayout>
  );
}
