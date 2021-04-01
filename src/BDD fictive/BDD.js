import mailImage from "./../images/imageMail1.png";
const Mails = [
    ['Mail de Bienvenue', 'Dernier:  28/03/2021', 'MaildeBienvenue'],
    ['Mail nouveau module', 'Nouveau','Mailnouveaumodule'],
    ['Mail de présentation', 'Dernier:  29/03/2021', 'Presentation','Maildeprésentation'],
    ['Mail de relance','Dernier:  30/03/2021', 'Mailderelance'],
    ['Mail fin de module','Nouveau','Mailfindemodule'],
    ['Mail encouragements', 'Nouveau','MailEncouragements'],
    ['Mail certifiaction', 'Nouveau','MailCertifiaction']
];
const drag1={
    Nom:'Module',
    contenu:"Bonjour Laure, Félicitation pour la validation du premier module, vous allez maintenant débuter le second qui est 'Comment valoriser mon activité'.",
    type:'texte',
    choixMultiple:{
        etat:false,
        choix:""
    }
}
const drag2={
    Nom:'Prochain rendez-vous',
    contenu:'sera votre prochain coach. Surveillez vos mails, vous recevrez d’ici peu une invitation pour le rencontrer et continué dans votre beau projet de valorisation de votre actif.',
    type:'texte',
    choixMultiple:{
        etat:true,
        choix: ['Pierre Farette, spécialiste RSE dans les entreprises ','Rose Tukipe, spécialiste RSE dans les entreprises ']
    }
}
const drag3={
    Nom:'Image',
    contenu:mailImage,
    type:'image',
    choixMultiple:{
        etat:false,
        choix:""
    }
}
const drag4={
    Nom:'+',
    contenu:'',
    choixMultiple:{
        etat:false,
        choix:""
    }
}
const dragD = {
    Nom:'drag'
}
const dragD4 = [drag1,drag2,drag3,drag4]
const DragNDropBienvenu = [drag1,drag2,drag3,drag4]

export {Mails,DragNDropBienvenu, dragD4};