import React from "react";
import "./style.css";

const Teksti = ({ texti }) => {
  return (
    <div className={texti}>
      <h2>Mäyräkoira</h2>
      <p>
      Mäyräkoira (saks. Dachshund, Dackel, Teckel) on lyhytjalkainen ja pitkäselkäinen koirarotu. 
      Saksasta peräisin oleva rotu on alun perin jalostettu mäyräjahtiin. 
      Mäyräkoirat muodostavat oman FCI-roturyhmän nro 4. 
      Mäyräkoiran lyhytjalkaisuus johtuu periytyvästä mutaatiosta, 
      joka estää luiden kasvun sikiövaiheessa täyteen pituuteen.
      </p>
      <p>
      Mäyräkoirat jaetaan rinnanympäryytensä perusteella kolmeen luokkaan: 
      normaalikokoisiin, kääpiö- ja kaniinimäyräkoiriin. 
      
      Rodulla on myös kolme karvamuunnosta: lyhyt-, karkea- ja pitkäkarvainen.
      </p>
      <p>
      Mäyräkoiran tyypillisiä värejä ovat ruskea, musta, riista ja punainen erivärisin merkein. 
      Rodun yleinen sairaus on niin sanottu mäyräkoirahalvaus. 
      (huomautus: välilevytyrä, joka on yleistä pitkäselkäisillä ja lyhyt jalkaisilla koirilla) 
      Mäyräkoiria käytetään sekä metsästykseen että seurakoiraksi, 
      ja se sopiikin hyvin perhekoiraksi. 
      Metsästyksessä ne soveltuvat mataluutensa vuoksi hyvin luolametsästykseen, 
      jossa tyypillisiä saaliseläimiä ovat mäyrä, supikoira ja kettu. Sitä voidaan käyttää myös ajokoirana.
      </p>
      <h2>Ulkonäkö</h2>
      <p>
      Mäyräkoiralle ominaista on sen jalkojen lyhyys. Tämä johtuu mutaatiosta, 
      jonka takia mäyräkoirien pitkien putkiluiden kasvu pysähtyy sikiökaudella. 
      Mäyräkoira on pitkänomainen, lihaksikas, ryhdikäs ja ylväs. 
      Vaikka mäyräkoiran raajat ovat lyhyet, se on hyvin liikkuva ja ketterä. 
      Mäyräkoiran pää on pitkänomainen, hieman kirsua kohden kapeneva. 
      Kulmakaaret ovat erottuvat. Kuono-osa on pitkä. Mäyräkoiralla on 42 hammasta, 
      joista kulmahampaat ovat voimakkaat ja lomittain. Silmät ovat soikeat ja melko kaukana toisistaan. 
      Silmien väri on tummanpunaruskeasta mustanruskeaan. Korvat ovat riippuvat ja kärjestä hieman pyöreät. 
      Korvien kärjet ovat poskenmyötäiset. Mäyräkoiran maavara on noin kolmannes säkäkorkeudesta. 
      Säkäkorkeuden suhde ruumiin pituuteen on 1:1,7-1,8. Rintakehä erottuu selkeästi. 
      Raajat ovat suorat ja lihaksikkaat. Nahka on tiiviisti kehonmyötäinen.
      </p>
      <p>
      Mäyräkoirat jaetaan kolmeen ryhmään sekä karvalaadun että koon perusteella. 
      Karvalaadut ovat karkea-, pitkä- ja lyhytkarvainen. 
      Lyhytkarvaista kutsutaan joskus myös sileäkarvaiseksi.
      
      Koon perusteella mäyräkoirat jaetaan normaalikokoisiin, joiden rinnanympärys on yli 35 cm, 
      kääpiomäyräkoiriin (30-35 cm) ja kaniinimäyräkoiriin (alle 30 cm). 
      Normaalikokoiset mäyräkoirat painavat noin yhdeksän kilogrammaa. 
      Rinnanympärys pitää mitata ennen 15 kuukauden ikää. 
      Britanniassa ja Yhdysvalloissa mäyräkoirat jaetaan koon perusteella kahteen ryhmään massan mukaan: 
      normaalikokoinen painaa 9-12 kg ja pienoismäyräkoira 4,5-5 kg. 
      (huomautus: koko määrityksiin tullut muutoksia, kuten kääpiö mäyräkoirien rinnanympärys uroksilla 37cm ja naarailla 35cm. kts kennelliitto)
      </p>

      <p>
      <b>Lyhytkarvaisen mäyräkoiran</b> peitinkarva on lyhyttä, tiheää, tiivistä ja kovaa. 
      Kehossa ei ole karvattomia kohtia: myös häntä on kauttaaltaan karvan peittämä. 
      Lyhytkarvaisilla mäyräkoirilla on kolme väriluokkaa:
      </p>
      <p>
      Ensimmäinen on yksiväriset. Yksivärinen voi olla punainen, punakeltainen tai keltainen mustin päistärkarvoin. 
      Valkoinen väri ei ole toivottu, mutta valkoiset täplät ovat sallittuja. Kirsu ja kynnet ovat mustia tai punertavanruskeita.
      </p>
      <p>
      Kaksiväriset lyhytkarvaiset mäyräkoirat ovat syvänmustia tai ruskeita keltaisin tai ruskein merkein. 
      Valkoinen väri ei ole kaksivärisilläkään toivottu. Mustassa värissä pitää olla ruskeita merkkejä. Kirsu ja kynnet ovat pohjavärin väriset.
      </p>
      <p>
      Kolmas on juovikkaat ja laikulliset, joilla pohjaväri on musta, punainen tai harmaa. 
      Tällöin koiralla on epäsäännöllisiä keltaisia ja harmaita merkkejä. 
      Kirsu ja kynnet ovat kuin yksi- ja kaksivärisillä. Korvat eivät saa olla karvattomia.
      </p>
      <p>
      <b>Karkeakarvaisen mäyräkoiran</b> karva on rungonmyötäinen ja sen alla on aluskarva. 
      Koiralla on selkeä parta ja tuuheat kulmakarvat. Väri on tavallisesti vaalea tai riistanvärinen. 
      Lisäksi sallitaan kulonkeltainen ja lyhytkarvaisen mäyräkoiran värit. Karva ei saa olla pehmeää.
      </p>
      <p>
      <b>Pitkäkarvaisella mäyräkoiralla</b> on sileä, kiiltävä, rungonmyötäinen karva. Päällyskarvan alla on aluskarvaa. 
      Korvakarvat ylettyvät korvien yli. Karva on pidempää kaulassa ja rungon alapuolella. 
      Karva ei saa olla samanpituista koko kehossa. Värit ovat samat kuin lyhytkarvaisilla mäyräkoirilla. 
      Erityisesti Yhdysvalloissa mäyräkoirilla tavataan paljon erilaisia värimuunnoksia.
      </p>
      <p>
      Suosituin muunnos Suomessa on karkeakarvainen normaalikokoinen mäyräkoira, joita on Suomessa rekisteröity 
      vuoden 2020 alkuun mennessä 23 565 yksilöä Vuonna 2019 karkeakarvainen normaalikokoinen mäyräkoira oli 
      Suomen 10. suosituin rotu.
      </p>
      <p>
      Mäyräkoiran vakavia virheitä ovat liian korkearaajainen tai maataviistävä rakenne, jotkin virheet hampaissa, 
      herasilmät, teräväkärkiset, liian laskostuneet korvat, riippuva runko, notko- tai köyryselkä, 
      lantio korkeammalla kuin säkä, pihtikinttuisuus, länkisäärisyys, heikosti kulmautuneet raajat, 
      huono liikkuvuus tai väärään suuntaan osoittavat käpälät. Hylkääviä virheitä on muun muassa väärä purenta, 
      usean hampaan puuttuminen, sisäänpainunut rintakehä, häntäviat, löysät lavat sekä eteenpäin taittuvat ranteet.
      </p>
      <h2>Luonne ja käyttäytyminen</h2>
      <p>
      Mäyräkoirat ovat keskimäärin ystävällisiä, leikkisiä ja tasapainoisia. 
      Ne ovat itsepäisiä eivätkä luovu saavutetuista eduista. 
      Ne ovat intohimoisia, kestäviä ja ketteriä metsästyskoiria. 
      Metsästyskoirat eivät saa jäädä pelkäämään mahdollista epäonnistumista. 
      Mäyräkoiran hajuaisti on hyvin kehittynyt.
      </p>
      <p>
      Mäyräkoiran hylkääviä virheitä on muun muassa vihaisuus, liiallinen aggressiivisuus ja liiallinen arkuus. 
      Se ei saa pelätä kovia ääniä. Mäyräkoira voi olla hyvin puolustava omistajaansa kohtaan. 
      Mäyräkoira on sopivassa kodissa rauhallinen ja mukava perhekoira. 
      Erityisesti pienoismäyräkoirat ovat monesti seurakoiria. 
      Mäyräkoira on lapsiystävällinen rotu, joka vaatii paljon liikuntaa, mielellään metsäisessä maastossa. 
      Mäyräkoira voi olla joskus tottelematon johtuen sen käyttötarkoituksesta toimia itsenäisesti luolissa.

      <b>Lähde: Wikipedia</b>
      </p><br></br>
    </div>
  );
};
export default Teksti;
