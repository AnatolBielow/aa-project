import {
    HistoryContent,
    PageTitle,
    SectionStyled,   
  } from "./Page.styled";
 import img from '../Images/history.jpg';
import { BackButton } from "../BackButton";
  export const History = () => {
    return (
      <SectionStyled img={img}>
        <PageTitle>Historia AA</PageTitle>
        <HistoryContent>
              <p>W 1840 r. w Baltimore (USA) powstało Stowarzyszenie im. Waszyngtona (Washingtonian Society).
                Początkowo jego członkami byli tylko alkoholicy. W niedługim czasie liczba członków Stowarzyszenia przekroczyła wprawdzie 100 tysięcy, ale coraz więcej było w nim osób nie uzależnionych, polityków, działaczy społecznych i innych.
                Rozszerzony został też zakres działalności i zainteresowań Stowarzyszenia. Jego członkowie angażowali się w walkę o zniesienie niewolnictwa oraz inne działania polityczne i społeczne.</p>
                <br/>
                <p>Bez względu na to, jak szczytne idee przyświecały jego członkom, Stowarzyszenie szybko utraciło w ten sposób zdolność pomagania alkoholikom. Jednak doświadczenie to zostało wykorzystane podczas tworzenia i redagowania VI i X Tradycji AA.</p>
                <p>W 1908 r. z Chrześcijańskiej Wspólnoty Pierwszych Wieków (First Century Christian Fellowship) wyłoniła się tzw. Grupa Oxfordzka. Propagowała ona idee: absolutnej czystości, absolutnej miłości, absolutnej i stałej gotowości oraz absolutnej uczciwości. Według członków grupy stanowiło to istotę pierwotnego (z początków I wieku) chrześcijaństwa. Niektóre z zasad obowiązujących w Grupach Oxfordzkich włączono do Programu 12 Kroków AA. Pod zmienioną nazwą (Re-Armament Movement) Grupy Oxfordzkie istnieją gdzieniegdzie do dziś.</p>
                <br/>
                <p>I tu zaczyna się właściwa historia AA. Bill W. makler giełdowy z Nowego Jorku, szukający wcześniej pomocy (z różnym skutkiem) w takiej właśnie Grupie Oxfordzkiej, w Akron (Ohio- USA), w 1935 r. spotkał dr Boba, chirurga z Akron. Obaj byli wówczas uznawani za alkoholików w beznadziejnym stanie (dr Bob nie był już nawet w stanie operować). Obaj też próbowali różnych kuracji, przebywali kilkakrotnie w szpitalach – bez jakichkolwiek efektów. Bill i Bob odbyli ze sobą kilka rozmów, mówiąc zasadniczo tylko o swoim piciu, i ze zdziwieniem stwierdzili, że te rozmowy pomagają im zachować abstynencję.Wkrótce odkryli także, że mogą poszukać innych alkoholików i niezależnie, czy przynosi to efekt u podopiecznych czy nie, szczera rozmowa z nimi pozwala im samym zachowywać trzeźwość. Gdy grono niepijących dzięki odkryciu Billa i Boba powiększyło się do kilkudziesięciu osób postanowili spisać swe przeżycia, by w ten sposób udostępnić je większej liczbie alkoholików.</p>
                <p>W 1939 r. wydana została podstawowa książka Wspólnoty AA – „Anonimowi Alkoholicy”, której tytuł dał nazwę Wspólnocie. Tekst jej w znacznej mierze napisany przez Billa W. ukazywał sposób dzięki, któremu zachowywało trwałą trzeźwość pierwszych 100 uczestników AA. W książce tej przedstawiono również historie osobiste pierwszych zdrowiejących tą metodą alkoholików.</p><p>W oryginalnym wydaniu opowieści tych było dość dużo (wydanie IV zawierało 41 „piciorysów”) i książkę szybko zaczęto nazywać Wielką Księgą. Polskie I wydanie zawierało 4 takie historie, w wydaniu II zaprezentowano 7 historii osobistych polskich alkoholików.</p>
                <br/>
                <p>Wspólnota Anonimowych Alkoholików rozwijała się szybko, jednakże w miarę rozwoju pojawiało się wiele problemów, takich jak np. członkostwo, zdobywanie i podział pieniędzy, stosunki międzyludzkie, kierowanie grupami, reprezentacja na zewnątrz. Z tych burzliwych, a czasem nawet smutnych doświadczeń, powstało Dwanaście Tradycji AA opublikowanych w 1946 roku i ostatecznie zaakceptowanych przez Wspólnotę w 1950 roku.</p>

        </HistoryContent>
        <BackButton/>
      </SectionStyled>
    );
  };