// src/components/Fari9onaSection/Fari9onaSection.js
import React from 'react';
import './Fari9onaSection.css';
import TeamCard from '../TeamCard/TeamCard';

// Import team member photos
import walid from '../../assets/team/walid.png';
import samad from '../../assets/team/samad.png';
import amina from '../../assets/team/amina.png';
import soumiya from '../../assets/team/soumiya.png';
import abdrahim from '../../assets/team/abdrahim.png';
import abdsamad from '../../assets/team/abdsamad.png';
import zakaria from '../../assets/team/zakaria.png';
import jawad from '../../assets/team/jawad.png';
import ayoub from '../../assets/team/ayoub.png';
import saad from '../../assets/team/saad.png';
import abdhadi from '../../assets/team/abdhadi.png';
import adil from '../../assets/team/adil.png';

const teamMembers = [
  {
    photo: walid,
    name: 'وليد العسيري',
    position: 'رئيس مجلس الإدارة',
  },
  {
    photo: samad,
    name: 'عبد الصمد بنبو',
    position: 'الرئيس التنفيذي ',
  },
  {
    photo: amina,
    name: 'آمنة بنبو',
    position: ' مدير العمليات الرئيسي',
  },
  {
    photo: soumiya,
    name: 'سومية طكية',
    position: 'مديرة الموارد البشرية ',
  },{
    photo: abdrahim,
    name: 'عبد الرحيم بنبو',
    position: 'مدير مشروع ',
  },
  {
    photo: abdsamad,
    name: 'عبد الصمد طكية',
    position: 'مدير فني',
  },
  {
    photo: zakaria,
    name: 'زكرياء الغزاي',
    position: 'محاسب',
  },
  {
    photo: jawad,
    name: 'جواد الهدين',
    position: 'مدير الإنتاج والتواصل',
  },
  {
    photo: ayoub,
    name: 'أيوب قرواش',
    position: 'مصمم إبداعي',
  },
  {
    photo: saad,
    name: 'سعد دحنون',
    position: 'مصمم غرافيك',
  },
  {
    photo: abdhadi,
    name: 'عبد الهادي البحري',
    position: 'مساعد تقني',
  },
  {
    photo: adil,
    name: 'عادل المياني',
    position: 'تقني',
  },

];

const Fari9onaSection = () => {
  return (
    <section className="fari9ona-section" id="fari9ona">
      <h2 className="section-title">فريقنا</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            photo={member.photo}
            name={member.name}
            position={member.position}
          />
        ))}
      </div>

    </section>
  );
};

export default Fari9onaSection;
