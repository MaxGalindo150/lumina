import React from 'react';

export enum UserType {
  CLIENT = 'CLIENT',
  WORKER = 'WORKER'
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface StepItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface PriceTier {
  title: string;
  price: number;
  unit: string;
  features: string[];
  isHighlight?: boolean;
}