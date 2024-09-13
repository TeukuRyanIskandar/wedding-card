import { Phone, MusicNotes, MapPin, Gift, Envelope } from "@phosphor-icons/react";
import { ReactNode } from 'react';

interface NavbarItem {
    title: string;
    logo: ReactNode;
  }

export const NAVBAR_DATA: NavbarItem[] = [
    {
        "title": "Contact",
        "logo": <Phone size={32} weight="fill" />
    },
    {
        "title": "Song",
        "logo": <MusicNotes size={32} weight="fill" />
    },
    {
        "title": "Location",
        "logo": <MapPin size={32} weight="fill" />
    },
    {
        "title": "Gift",
        "logo": <Gift size={32} weight="fill" />
    },
    {
        "title": "RSVP",
        "logo": <Envelope size={32} />
    }
];
