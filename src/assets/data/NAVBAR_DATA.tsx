import { Phone, MusicNotes, MapPin, Gift, Envelope } from "@phosphor-icons/react";
import { NavbarItem } from "../interfaces/navbarAndPopupInterface";


export const NAVBAR_DATA: NavbarItem[] = [
    {
        "title": "Contact",
        "logo": <Phone size={32} />
    },
    {
        "title": "Song",
        "logo": <MusicNotes size={32} />
    },
    {
        "title": "Location",
        "logo": <MapPin size={32} />
    },
    {
        "title": "Gift",
        "logo": <Gift size={32} />
    },
    {
        "title": "RSVP",
        "logo": <Envelope size={32} />
    }
];
