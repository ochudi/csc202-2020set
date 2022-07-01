import logger from './tools.js';

const addresses = [ "John", "Chudi", "Chris", "Janet", "Tom", "Kiera" ];

addresses.map((addressee) => {
    const message = `Dear ${addressee},
It is my pleasure to inform you that your package is ready for delivery`;
    logger(message);
});

const mailMerger = (addressees, mailBody) => {
    addressees.map((addresee) => {
        const message = `Dear ${addresee},
        ${mailBody}`;
        logger(message);
    })

};

mailMerger([ "Jane", "John", "Chris" ] , `Hola, Como estas`)