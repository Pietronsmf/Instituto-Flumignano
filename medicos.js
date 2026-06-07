/* =========================================================
   Corpo Clínico — dados, cards e modal do profissional
   ========================================================= */
(function () {
  "use strict";
  const teamRio = document.getElementById("teamRio");
  const teamCwb = document.getElementById("teamCwb");
  if (!teamRio || !teamCwb) return;

  const RIO_WA = "https://wa.me/5521987561627";
  const CWB_WA = "https://api.whatsapp.com/send?phone=5541996182974&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";
  const IMG = "assets/medicos/";

  const RIO = [
    { name: "Dr. Izidoro de Hiroki Flumignan", spec: "Endocrinologia · Cardiologia · Medicina Preventiva", img: IMG + "izidoro.jpg", initials: "IF", unit: "Rio de Janeiro",
      bio: "Graduado em Medicina pela Universidade de Vassouras; residência em Clínica Médica pelo Hospital Clementino Fraga Filho (UFRJ); pós-graduado em Endocrinologia, Cardiologia, Medicina Preventiva e Administração Hospitalar; titulado pela Associação Médica Brasileira. Professor na PUC-Rio, Diretor do IFM-Rio e fundador da SoBraTA — Sociedade Brasileira de Transtornos Alimentares. Coordenador do Núcleo de Pesquisas Médicas do IFM-Rio, com publicações em prevenção do diabetes, telemedicina e transtornos alimentares." },
    { name: "Dra. Vitória Santa Marinha Flumignan", spec: "Clínica Médica · Coordenadora de Pesquisa", img: IMG + "vitoria.jpeg", initials: "VF", unit: "Rio de Janeiro",
      bio: "Graduada em Medicina pela Universidade Estácio de Sá (Rio de Janeiro); experiência clínica em Clínica Médica, Pediatria, Ginecologia, Obstetrícia e CTI em hospitais do Rio de Janeiro. Coordenadora do Centro de Pesquisas Médicas e organizadora da Biblioteca Virtual do Instituto Flumignano de Medicina (IFM-Rio)." },
    { name: "Dra. Sara Ferreira Destro", spec: "Cirurgia Plástica", img: IMG + "sara-ferreira.jpg", initials: "SD", unit: "Rio de Janeiro",
      bio: "Médica com atuação em Cirurgia Plástica, dedicada a procedimentos reparadores e estéticos." },
    { name: "Karina S. M. L. P. de Araújo", spec: "Neuropsicologia · Terapia Cognitivo-Comportamental", img: IMG + "karina-santa-marinha.jpg", initials: "KA", unit: "Rio de Janeiro",
      bio: "Neuropsicóloga, especialista em terapia cognitivo-comportamental e membro fundadora da Sociedade Brasileira de Transtornos Alimentares." },
    { name: "Dra. Maialu Rodrigues Ambrosio", spec: "Angiologia e Cirurgia Vascular", img: IMG + "maialu-rodrigues.jpg", initials: "MA", unit: "Rio de Janeiro",
      bio: "Médica angiologista e cirurgiã vascular, dedicada ao diagnóstico e tratamento das doenças dos vasos e da circulação." },
    { name: "Décio Alves de Souza Júnior", spec: "Fisioterapia", img: "", initials: "DS", unit: "Rio de Janeiro",
      bio: "Fisioterapeuta, dedicado à reabilitação e à recuperação funcional do movimento." },
    { name: "Caroline de Araújo Fernandes", spec: "Psicologia · Terapia Cognitivo-Comportamental", img: "", initials: "CF", unit: "Rio de Janeiro",
      bio: "Psicóloga, especialista em terapia cognitivo-comportamental." },
    { name: "Paula de Sousa Santos Andrade Barros", spec: "Nutrição · Reeducação Alimentar", img: IMG + "paula-barros.jpeg", initials: "PB", unit: "Rio de Janeiro",
      bio: "Nutricionista com foco em reeducação alimentar, alimentação vegana e vegetariana e cuidado nutricional do diabetes." }
  ];

  const CWB = [
    { name: "Dra. Viviane de Hiroki Flumignan Zétola", spec: "Neurologia · Doppler Transcraniano", img: IMG + "viviane.jpg", initials: "VZ", unit: "Curitiba",
      bio: "Graduada em Medicina pela UFPR; mestrado em Medicina Interna e doutorado em Neurologia pela USP; ex-fellow na Universidade Sackler de Tel-Aviv. Neurossonologista e Membro Titular da Academia Brasileira de Neurologia; professora associada de Neurologia na UFPR e atual coordenadora do Programa de Pós-Graduação em Medicina Interna e Ciências da Saúde." },
    { name: "Dr. Paulo Roberto Zétola", spec: "Medicina Ocupacional e Esportiva", img: IMG + "paulo-zetola.jpg", initials: "PZ", unit: "Curitiba",
      bio: "Graduado em Medicina pela UFPR; pós-graduado em Medicina Ocupacional pela UFPR e em Medicina do Esporte pela USP; mestre em Ergonomia pela UFSC." },
    { name: "Dra. Rumiko Uno", spec: "Ginecologia e Obstetrícia", img: IMG + "rumiko.jpg", initials: "RU", unit: "Curitiba",
      bio: "Graduada em Medicina pela UFPR, com atuação em Ginecologia e Obstetrícia." },
    { name: "Dra. Patrícia Coral", spec: "Neurologia · Neurofisiologia · Medicina do Sono", img: IMG + "patricia-coral.png", initials: "PC", unit: "Curitiba",
      bio: "Graduada em Medicina pela UFSC; residência em Clínica Médica e Neurologia pela UFPR; residência em Eletroencefalografia e Epilepsia (R3) pela UFPR." },
    { name: "Dr. Paulo Roberto Cruz Marquetti", spec: "Cardiologia", img: IMG + "marquetti.jpg", initials: "PM", unit: "Curitiba",
      bio: "Graduado em Medicina pela UFPR; titulado pela Sociedade Brasileira de Cardiologia e pela AMB; especialista em terapia intensiva pela AMIB; professor adjunto de Cardiologia da UFPR e médico intensivista do Hospital de Clínicas da UFPR." },
    { name: "Dr. Juliano Muzzio", spec: "Neurologia · Doppler Transcraniano", img: IMG + "juliano-muzzio.jpg", initials: "JM", unit: "Curitiba",
      bio: "Graduado em Medicina pela UFPR; residência em Neurologia pelo Hospital de Clínicas da Universidade Federal do Paraná." },
    { name: "Juliana Huebl Januário", spec: "Nutrição Funcional e Clínica", img: IMG + "juliana-januario.jpeg", initials: "JJ", unit: "Curitiba",
      bio: "Graduada em Nutrição pela UFPR; especialista em Qualidade de Alimentos, em Nutrição Funcional e em Nutrição Clínica." },
    { name: "Dr. Valter Abelardino", spec: "Psiquiatria", img: IMG + "valter.png", initials: "VA", unit: "Curitiba",
      bio: "Graduado em Medicina pela UFPR; especialista em Psiquiatria pela ABP e em Dependências Químicas pela UNIAD/EPM/UNIFESP." },
    { name: "Dra. Maria Letícia Fagundes", spec: "Ginecologia · Reprodução Humana", img: IMG + "maria-leticia.jpg", initials: "MF", unit: "Curitiba",
      bio: "Graduada pela Faculdade Evangélica de Medicina do Paraná; especialização em Ginecologia e Obstetrícia; mestrado em Reprodução Humana e Planejamento Familiar pela USP; primeira ginecologista do Paraná titulada em Videolaparoscopia pela Sociedade Brasileira de Cirurgia Geral." },
    { name: "Elisete Luiz de Souza", spec: "Nutrição", img: IMG + "elisete.jpg", initials: "ES", unit: "Curitiba",
      bio: "Graduada em Nutrição pela Uniandrade; experiência hospitalar e em pré e pós-operatório de gastroplastia redutora (cirurgia bariátrica)." },
    { name: "Palloma Zetola", spec: "Psicologia · Psicanálise", img: IMG + "palloma.jpeg", initials: "PZ", unit: "Curitiba",
      bio: "Graduada em Psicologia pela PUCPR; pós-graduanda em Psicanálise pelo Instituto ESPE." },
    { name: "Dr. Rodrigo Katsutoshi Hasegawa", spec: "Endocrinologia e Metabologia", img: IMG + "rodrigo.jpg", initials: "RH", unit: "Curitiba",
      bio: "Graduado pela Faculdade Evangélica Mackenzie do Paraná; residência em Clínica Médica (HC-UFPR) e em Endocrinologia e Metabologia (SEMPR HC-UFPR); titulado pela Sociedade Brasileira de Endocrinologia e Metabologia (SBEM)." },
    { name: "Dr. Olímpio R. França Neto", spec: "Cardiologia", img: IMG + "olimpio.jpeg", initials: "OF", unit: "Curitiba",
      bio: "Graduado em Medicina pela UFPR; residência em Cardiologia pela UFPR; mestre em Medicina pela PUC-PR; fellow da European Society of Cardiology; presidente da Sociedade Paranaense de Cardiologia (22/23) e coautor da diretriz brasileira de síndromes coronarianas crônicas." },
    { name: "Dra. Aline da Silva Tezotto", spec: "Geriatria · Cuidados Paliativos", img: IMG + "aline.jpeg", initials: "AT", unit: "Curitiba",
      bio: "Graduada em Medicina pela Universidade Positivo; residência em Clínica Médica pelo Hospital São José de Joinville; pós-graduação em Cuidados Paliativos; titulada pela Sociedade Brasileira de Geriatria e Gerontologia e pela AMB." }
  ];

  const ALL = RIO.concat(CWB);

  const cardHTML = (d, i) => {
    const avatar = d.img
      ? '<div class="doc__avatar"><img src="' + d.img + '" alt="' + d.name + '" loading="lazy"></div>'
      : '<div class="doc__avatar">' + d.initials + "</div>";
    return (
      '<article class="doc" role="button" tabindex="0" data-i="' + i + '" aria-label="Ver perfil de ' + d.name + '">' +
      '<span class="doc__zoom"><svg><use href="#i-eye"/></svg></span>' +
      avatar +
      "<h3>" + d.name + "</h3>" +
      '<p class="spec">' + d.spec + "</p>" +
      "</article>"
    );
  };

  teamRio.innerHTML = RIO.map((d, i) => cardHTML(d, i)).join("");
  teamCwb.innerHTML = CWB.map((d, i) => cardHTML(d, RIO.length + i)).join("");

  /* ---- Modal ---- */
  const modal = document.getElementById("docModal");
  const dm = {
    avatar: document.getElementById("dmAvatar"),
    name: document.getElementById("dmName"),
    spec: document.getElementById("dmSpec"),
    unit: document.getElementById("dmUnit"),
    bio: document.getElementById("dmBio"),
    wa: document.getElementById("dmWa")
  };
  let lastFocus = null;

  const openModal = (d) => {
    dm.name.textContent = d.name;
    dm.spec.textContent = d.spec;
    dm.unit.textContent = d.unit;
    dm.bio.textContent = d.bio;
    dm.avatar.innerHTML = d.img ? '<img src="' + d.img + '" alt="' + d.name + '">' : d.initials;
    dm.wa.href = d.unit === "Curitiba" ? CWB_WA : RIO_WA;
    modal.classList.add("open");
    document.body.classList.add("modal-open");
    const cls = modal.querySelector(".modal__close");
    if (cls) cls.focus();
  };
  const closeModal = () => {
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
    if (lastFocus) lastFocus.focus();
  };

  const handleActivate = (el) => {
    const i = +el.getAttribute("data-i");
    if (!isNaN(i) && ALL[i]) { lastFocus = el; openModal(ALL[i]); }
  };

  [teamRio, teamCwb].forEach((grid) => {
    grid.addEventListener("click", (e) => {
      const card = e.target.closest(".doc");
      if (card) handleActivate(card);
    });
    grid.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const card = e.target.closest(".doc");
        if (card) { e.preventDefault(); handleActivate(card); }
      }
    });
  });

  modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
})();
