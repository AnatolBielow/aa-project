export const questions= [
  {
    question:
      "Czy zdarzyło się kiedykolwiek, że ktoś z Twojego bliskiego otoczenia zwrócił Ci uwagę, że za dużo pijesz?",
  },
  {
    question:
      "Czy w ostatnim czasie poświęcasz mniej czasu na swoje hobby lub na spotkania z rodziną? ",
  },
  {
    question:
      "Czy zdarza się, że wszczynasz awantury pod wpływem alkoholu, a nazajutrz o tym nie pamiętasz? ",
  },
  {
    question:
      "Czy zdarzyło się, że opuściłeś dzień w pracy, bo byłeś pijany lub miałeś kaca? ",
  },
  {
    question:
      "Czy zdarza się, że wpadasz w tzw. ciągi alkoholowe - tzn. pijesz przez kilka dni z rzędu? ",
  },
  { question: "Czy kiedykolwiek straciłeś partnera przez alkohol? " },
  { question: "Czy zdarzało Ci się prowadzić pojazd pod wpływem alkoholu? " },
  {
    question:
      "Czy zdarza Ci się, że odczuwasz poczucie winy lub wstyd z powodu swojego picia? ",
  },
  {
    question:
      'Czy pijesz przed wyjściem do klubu lub na spotkanie ze znajomymi, aby "zrobić podkład"? ',
  },
  { question: 'Czy zdarzają Ci się tzw. "urwane filmy" po alkoholu? ' },
  { question: "Czy zdarza się, że pijesz alkohol rano, aby złagodzić kaca? " },
  {
    question:
      "Czy zdarza Ci się, że odczuwasz potrzebę ograniczenia alkoholu na jakiś czas? ",
  },
  {
    question:
      "Czy zdarza Ci się chować puste butelki lub puszki po alkoholu, aby Twoi bliscy ich nie znaleźli? ",
  },
  { question: "Czy zdarza Ci się pić w samotności? " },
  {
    question:
      "Czy zdarzyło się kiedykolwiek, że wystąpiły u Ciebie: drżenie dłoni, wymioty, biegunka po spożyciu alkoholu? ",
  },
];
export const limit = 5;

export const positive = ({ summa }) => (
  <p>
    Twój wynik to {summa} odpowiedzi twierdzących. Analiza spożycia alkoholu
    wskazują obecnie na picie o niskim poziomie ryzyka. Warto obserwować swoje
    picie, intencje sięgania po alkohol i reakcje swojego organizmu oraz zmiany
    wzorca picia.
  </p>
);

export const warning = ({ summa }) => (
  <p>
    Twój wynik to {summa} odpowiedzi twierdzących. Wynik {limit} punktów albo
    więcej sugeruje uzależnienie. Ten test nie jest podstawą stuprocentowej
    diagnozy uzależnienia od alkoholu, jednak koniecznie sprawdź podejrzenie
    uzależnienia udając się do specjalistów pracujących w poradniach terapii
    uzależnienia od alkoholu.
  </p>
);

export const notAllAnswers = () => <p>Odpowiedz na wszystkie pytania!</p>;
