import React from 'react';
import Section from '../commons/Section';
import NoteList from './NoteList';
import { View } from 'react-native';

export default () => {
  return (
    <Section title='Note'>
        <NoteList/>
    </Section>
  );
};