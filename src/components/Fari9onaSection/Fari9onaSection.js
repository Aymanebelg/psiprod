// src/components/Fari9onaSection/Fari9onaSection.js
import React from 'react';
import './Fari9onaSection.css';
import TeamCard from '../TeamCard/TeamCard';
import { useTranslation } from 'react-i18next';

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

const Fari9onaSection = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      photo: walid,
      nameKey: 'fari9onaSection.teamMembers.walidAlAsiri',
      positionKey: 'chairmanOfTheBoard',
    },
    {
      photo: samad,
      nameKey: 'fari9onaSection.teamMembers.abdulSamadBinBu',
      positionKey: 'ceo',
    },
    {
      photo: amina,
      nameKey: 'fari9onaSection.teamMembers.aminaBinBu',
      positionKey: 'chiefOperatingOfficer',
    },
    {
      photo: soumiya,
      nameKey: 'fari9onaSection.teamMembers.soumiyaTakiya',
      positionKey: 'hrManager',
    },
    {
      photo: abdrahim,
      nameKey: 'fari9onaSection.teamMembers.abdulRahimBinBu',
      positionKey: 'projectManager',
    },
    {
      photo: abdsamad,
      nameKey: 'fari9onaSection.teamMembers.abdulSamadTakiya',
      positionKey: 'technicalManager',
    },
    {
      photo: zakaria,
      nameKey: 'fari9onaSection.teamMembers.zakariaAlGhuzai',
      positionKey: 'accountant',
    },
    {
      photo: jawad,
      nameKey: 'fari9onaSection.teamMembers.jawadAlHadin',
      positionKey: 'productionCommunicationManager',
    },
    {
      photo: ayoub,
      nameKey: 'fari9onaSection.teamMembers.ayoubQarawash',
      positionKey: 'creativeDesigner',
    },
    {
      photo: saad,
      nameKey: 'fari9onaSection.teamMembers.saadDahnon',
      positionKey: 'graphicDesigner',
    },
    {
      photo: abdhadi,
      nameKey: 'fari9onaSection.teamMembers.abdulHadiAlBahri',
      positionKey: 'technicalAssistant',
    },
    {
      photo: adil,
      nameKey: 'fari9onaSection.teamMembers.adilAlMiani',
      positionKey: 'technician',
    },
  ];

  return (
    <section className="fari9ona-section" id="ourTeam">
      <h2 className="section-title3">{t('fari9onaSection.title')}</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            photo={member.photo}
            name={t(member.nameKey)}
            position={t(`fari9onaSection.positions.${member.positionKey}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default Fari9onaSection;
