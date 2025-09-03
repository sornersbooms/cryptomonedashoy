'use client';

import CourseSidebar from '@/components/CourseSidebar';
import styles from './layout.module.css';

export default function CourseClientLayout({ children, courseData }) {
  return (
    <div className={styles.courseContainer}>
      <CourseSidebar 
        title={courseData.title} 
        modules={courseData.modules} 
      />
      
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
