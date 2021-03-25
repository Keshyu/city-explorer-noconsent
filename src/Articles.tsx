import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Articles = {
  Gok: () => (
    <View>
      <Text style={styles.title}>
        Мирнинский ГОК
      </Text>
      <Text style={styles.description}>
        Мирнинский горно-обогатительный комбинат (ГОК) добывает алмазы на месторождениях «Мир», «Интернациональная», из россыпей «Водораздельные галечники», «Иреляхские россыпи», «Горное», техногенного месторождения «Хвостохранилище фабрики №5»
        На комбинате работает более 3000 человек.
      </Text>
      <Text style={styles.heading}>
        Рудник «Интернациональный»
      </Text>
      <Text style={styles.paragraph}>
        Первый подземный рудник АЛРОСА. С 1999 года функционирует на кимберлитовой трубке «Интернациональная», которая обладает очень высоким содержанием алмазов в руде (более 8 карат на тонну). Согласно кодексу JORC, запасов рудника достаточно для стабильной добычи до 2035 года.
      </Text>
      <Text style={styles.paragraph}>
        Объем добычи алмазов в 2017 году – 3,7 млн карат.
      </Text>
      <Text style={styles.heading}>
        Рудник «Мир»
      </Text>
      <Text style={styles.paragraph}>
        Действует с 2009 года на трубке «Мир», алмазы которой отличаются высоким качеством, их среднее содержание превышает 3 карата на тонну. Согласно кодексу JORC, запасов рудника при нынешних содержаниях достаточно для ведения добычи вплоть до 2052 года.
      </Text>
      <Text style={styles.paragraph}>
        В связи с аварией в августе 2017 года утвержден проект консервации рудника «Мир». Проводится открытый конкурс проектов по возобновлению добычных работ на месторождении трубки «Мир».
      </Text>
      <Text style={styles.paragraph}>
        Объем добычи алмазов в 2017 году – 2,76 млн карат.
      </Text>
      <Text style={styles.heading}>
        Россыпные и техногенные месторождения
      </Text>
      <Text style={styles.paragraph}>
        Помимо коренных месторождений алмазов Мирнинский ГОК включает в себя россыпи «Водораздельные галечники», «Горное» и «Иреляхская россыпь», а также техногенное месторождение «Хвостохранилище фабрики № 5».
      </Text>
      <Text style={styles.paragraph}>
        Объем добычи алмазов из россыпных месторождений в 2017 году – 740 тыс. карат.
      </Text>
      <Text style={styles.heading}>
        Обогащение руды и песков
      </Text>
      <Text style={styles.paragraph}>
        Кимберлиты, извлекаемые из рудников «Мир» и «Интернациональный», а также часть песков из россыпных месторождений Мирнинского ГОКа обрабатываются на обогатительной фабрике №3, проектная мощность которой составляет 2 млн. тонн руды в год. В 70-е годы прошлого века фабрика была флагманом алмазодобывающей промышленности страны, сегодня ее оборудование позволяет успешно обрабатывать различные виды сырья – руду коренных месторождений, россыпи, техногенные запасы.
      </Text>
      <Text style={styles.paragraph}>
        Особенностью комбината является единственный в Российской Федерации и в АЛРОСА дражный алмазный флот. В комплексе ГОКа функционируют три драги №№ 201, 202, 203, которые проводят первичное обогащение алмазосодержащих галечников из россыпных месторождений («Иреляхские россыпи» и «Горное»).
      </Text>

      <View style={styles.footer} />
    </View>
  ),
  Sortirovka: () => (
    <View>
      <Text style={styles.title}>
        Центр сортировки алмазов
      </Text>
      <Text style={styles.description}>
        Добываемое всеми горно-обогатительными комбинатами и обогащенное на фабриках сырье доставляется в г. Мирный. В Центре сортировки проводят его предварительную сортировку и оценку.
      </Text>
      <Text style={styles.paragraph}>
        Алмазы затем отправляют в Москву, в Единую сбытовую организацию, и в Якутск, в Якутское предприятие по торговле алмазами. Здесь же в Мирном ведут мониторинг сырья с разных месторождений, результаты которого используются при планировании работы ГОКов.
      </Text>
      <Text style={styles.paragraph}>
        Центр был создан в 1990 г. Он включает различные участки производства и сервисного обслуживания: «хранилище», участок классификации, участок сортировки и оценки, участок минералогического изучения алмазов, аналитический отдел и другие.
      </Text>
      <Text style={styles.paragraph}>
        Движение и учет алмазной продукции полностью компьютеризированы с учетом «обратной связи» с добывающими предприятиями. Прием алмазов, все технологические операции строго учитываются в компьютерной базе данных.
      </Text>
      <Text style={styles.paragraph}>
        Важна роль Центра в изучении алмазов новых месторождений, выдаче первых прогнозов о качестве сырья открываемых трубок. В ЦСА также хранится полная коллекция алмазов добытых на территории Якутской алмазоносной провинции в процессе геолого-поисковых работ за многие годы.
      </Text>
      <Text style={styles.paragraph}>
        Через руки экспертов и сортировщиков Центра прошло алмазной продукции более чем на 35 млрд долларов США. Специалисты Центра имеют очень высокий профессиональный уровень.
      </Text>

      <View style={styles.footer} />
    </View>
  ),
  Cpk: () => (
    <View>
      <Text style={styles.title}>
        Центр подготовки кадров (ЦПК)
      </Text>
      <Text style={styles.paragraph}>
        АК «АЛРОСА» уделяет большое внимание процессу обеспечения производственной деятельности квалифицированными специалистами. Для этого в компании создан Центр подготовки кадров и действует система непрерывного образования сотрудников.
      </Text>
      <Text style={styles.paragraph}>
        Основная задача ЦПК – подготовка и переподготовка персонала Компании по следующим направлениям: обучение по рабочим профессиям (включая различные допуски и инструктажи) и обучение руководителей и специалистов. В отдельный блок выделены предаттестационная подготовка и организация аттестации по промышленной безопасности и обучение по охране труда.
      </Text>
      <Text style={styles.paragraph}>
        ЦПК организован 8 февраля 1991 года и имеет лицензию № 1041 от 20.07.2015 г. на осуществление образовательной деятельности по направлению профессиональное обучение, аккредитован в качестве независимого аттестационно-методического центра в области промышленной и энергетической безопасности (свидетельства об аккредитации № НАМЦ-0503 от 21.08.2015 и № НАМЦ-0503(2) от 27.12.2016), внесен в реестр аккредитованных организаций, оказывающих услуги в области охраны труда в части обучения работодателей и работников вопросам охраны труда, под регистрационным номером № 1023 от 11.01.2011 г.
      </Text>
      <Text style={styles.paragraph}>
        В состав ЦПК входят четыре учебно-курсовых комбината: Айхальский, Ленский, Мирнинский, Удачнинский, а также несколько профильных отделов. На сегодняшний день это динамично развивающее предприятие, на котором постоянно внедряются современные методы и формы обучения. Большое внимание уделяется качеству подготовки персонала, в том числе – рабочих. Уже стало традиционным проведение конкурсов профессионального мастерства среди рабочих по различным профессиям.
      </Text>
      <Text style={styles.paragraph}>
        Одной из основных задач инновационного развития Компании является сотрудничество с вузами. Такое сотрудничество призвано обеспечить высокое качество профессиональной подготовки специалистов, и ведется по следующим направлениям:
      </Text>
      <BulletedText>
        Повышение квалификации и переподготовка сотрудников Компании;
      </BulletedText>
      <BulletedText>
        Целевая подготовка студентов;
      </BulletedText>
      <BulletedText>
        Организация производственной практики студентов;
      </BulletedText>
      <BulletedText last>
        Участие специалистов Компании в преподавательской деятельности.
      </BulletedText>
      <Text style={styles.paragraph}>
        В качестве опорных определены следующие вузы, с которыми заключены Соглашения о сотрудничестве:
      </Text>
      <BulletedText>
        ФГАОУ ВО «Северо-восточный федеральный университет им. М.К. Аммосова» (г. Якутск);
      </BulletedText>
      <BulletedText>
        Политехнический институт (филиал) ФГАОУ ВО «Северо-Восточный федеральный университет им. М.К. Аммосова (г. Мирный);
      </BulletedText>
      <BulletedText>
        ФГБОУ ВО "Иркутский национальный исследовательский технический университет» (г. Иркутск);
      </BulletedText>
      <BulletedText>
        ФГОУ ВО «Сибирский федеральный университет» (г. Красноярск);
      </BulletedText>
      <BulletedText>
        ФГАОУ ВО «Национальный исследовательский технологический университет МИСиС» (г. Москва);
      </BulletedText>
      <BulletedText last>
        ФГБОУ ВО «Российский государственный геологоразведочный университет имени С. Орджоникидзе» (МГРИ-РГГРУ) (г. Москва).
      </BulletedText>
      <Text style={styles.paragraph}>
        Компания уделяет большое внимание работе с молодежью. В настоящее время в подразделениях Компании трудятся около 5 тыс. молодых специалистов, молодых работников и созданы двадцать восемь советов молодых специалистов. ЦПК курирует работу Объединения молодых специалистов АК «АЛРОСА».
      </Text>
      <Text style={styles.paragraph}>
        В сферу деятельности Объединения молодых специалистов входит:
      </Text>
      <BulletedText>
        адаптация молодых специалистов и молодых работников;
      </BulletedText>
      <BulletedText>
        организация и проведение социальных акций;
      </BulletedText>
      <BulletedText>
        профориентационная работа со школьниками общеобразовательных учреждений совместно с ЦПК АЛРОСА;
      </BulletedText>
      <BulletedText>
        научно-техническая, изобретательская, рационализаторская деятельность молодежи АЛРОСА;
      </BulletedText>
      <BulletedText last>
        организация и проведение культурно-массовых, спортивных, интеллектуальных мероприятий для молодежи АК «АЛРОСА».
      </BulletedText>
      <Text style={styles.paragraph}>
        По итогам трудового соревнования между предприятиями АК «АЛРОСА» за 2017 год коллектив ЦПК признан лучшим подразделением в номинации «Социальный комплекс».
      </Text>
      <Text style={styles.paragraph}>
        Дополнительную информацию об образовательных программах, курсах, семинарах, организуемых ЦПК, можно получить на портале (для работников АК «АЛРОСА» (ПАО) или на сайте ЦПК (для всех заинтересованных).
      </Text>

      <View style={styles.footer} />
    </View>
  ),
};

function BulletedText({ children, last }) {
  return (
    <View style={{...styles.row, marginBottom: (last ? 12 : 0)}}>
      <View style={styles.bullet}>
          <Text>{'\u2022' + " "}</Text>
      </View>

      <Text style={styles.normal}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    marginBottom: 16,
  },
  heading: {
    fontFamily: 'OpenSans-Bold',
    marginBottom: 12,
  },
  description: {
    fontFamily: 'OpenSans-Italic',
    marginBottom: 12,
  },
  paragraph: {
    fontFamily: 'OpenSans',
    marginBottom: 12,
  },
  normal: {
    fontFamily: 'OpenSans',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  bullet: {
    width: 10
  },
  footer: {
    height: 400,
  },
});

export default Articles;
