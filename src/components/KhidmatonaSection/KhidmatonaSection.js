// src/components/KhidmatonaSection/KhidmatonaSection.js
import React from 'react';
import './KhidmatonaSection.css';
import ServiceCard from '../ServiceCard/ServiceCard'; // Import the reusable ServiceCard component

const services = [
  {
    title: 'إنتاج الصور والفيديو',
    points: [
      'تصوير إعلانات، فيديوهات ترويجية، وأفلام قصيرة.',
      'إنتاج محتوى لمنصات التواصل الاجتماعي.',
      'خدمات البث المباشر وتصوير الفعاليات.',
      'معالجة الصور وتصميم الجرافيك للمطبوعات الرقمية',
    ],
  },
  {
    title: 'تسجيل وإنتاج الموسيقى',
    points: [
     'تسجيل الأغاني والبودكاست.',
      'إنتاج موسيقى الخلفية والتوزيع الموسيقي.',
      'إعداد المؤثرات الصوتية للألعاب والمشاريع الرقمية.',
      'توفير خدمات إعادة التوزيع الموسيقي (Remixes).',
    ],
  },
  {
    title: 'إنتاج الأفلام والوثائقيات',
    points: [
      'إنتاج أفلام روائية ووثائقية.',
      'توفير خدمات تحرير الفيديو وكتابة السيناريو.',
      'إنتاج مقاطع الفيديو التدريبية والتعليمية.',
      'المونتاج وإعداد المؤثرات الخاصة للأفلام.',
    ],
  },
  {
    title: 'تنظيم المهرجانات والفعاليات', 
    points: [
      'تنظيم حفلات موسيقية وفعاليات ثقافية.',
      'إدارة الفعاليات من التخطيط إلى التنفيذ.',
      'توفير خدمات التصميم والإخراج الفني للفعاليات.',
      'إنتاج وتجهيز الإعلانات الترويجية للمهرجانات.',
    ],
  },
];

const KhidmatonaSection = () => {
  return (
    <section className="khidmatona-section" id="khidmatona">
      <h2 className="section-title">خدماتنا</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} points={service.points} />
        ))}
      </div>
    </section>
  );
};

export default KhidmatonaSection;
