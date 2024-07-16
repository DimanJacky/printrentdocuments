import React, { useState } from 'react';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { saveAs } from 'file-saver';
import {Container, TextField, Button, Typography, TextareaAutosize} from '@mui/material';
import './App.css'
import {addOneYear, formatDate, formatDateTodayYY, formatDateTodayYYYY} from "./utils";

const WordProcessor = () => {
    const [replacementId, setReplacementId] = useState('');
    const [replacementSurname, setReplacementSurname] = useState('');
    const [replacementName, setReplacementName] = useState('');
    const [replacementBirthday, setReplacementBirthday] = useState(formatDateTodayYYYY());
    const [replacementJmb, setReplacementJmb] = useState('');
    const [replacementIznosu, setReplacementIznosu] = useState('300 (trista)');

    const [replacementOptina, setReplacementOptina] = useState('Bar');
    const [replacementKo, setReplacementKo] = useState('ŠUŠANJ');
    const [replacementParcele, setReplacementParcele] = useState('');
    const [replacementZgrade, setReplacementZgrade] = useState('');
    const [replacementNepokretnosti, setReplacementNepokretnosti] = useState('');
    const [replacementStantext, setReplacementStantext] = useState('Jednsoban stan');
    const [replacementSprat, setReplacementSprat] = useState('prizemlje');

    const [replacementZakupacSurname, setReplacementZakupacSurname] = useState('');
    const [replacementZakupacName, setReplacementZakupacName] = useState('');
    const [replacementZakupacBirthdate, setReplacementZakupacBirthdate] = useState(formatDateTodayYYYY());
    const [replacementCitizen, setReplacementCitizen] = useState('');
    const [replacementPassword, setReplacementPassword] = useState('');
    const [replacementDateOfIssue, setReplacementDateOfIssue] = useState(formatDateTodayYYYY());
    const [replacementExpiryDate, setReplacementExpiryDate] = useState(formatDateTodayYYYY());

    const [replacementPropertyLease, setReplacementPropertyLease] = useState('300 (trista)');
    const [replacementComment, setReplacementComment] = useState('Od momenta prijema depozita, imovina se uklanja iz zakupa, a Zakupodavac dostavlja Zakupcu elektronsku kopiju dokumenta kojim se potvrđuje vlasništvo nad imovinom ponuđenom za iznajmljivanje.');
    const [replacementConclude, setReplacementConclude] = useState(`12 meseci od ${formatDateTodayYY()} do ${addOneYear(formatDateTodayYY())}`);
    const [replacementConcludeDo, setReplacementConcludeDo] = useState(formatDateTodayYY());
    const [replacementIznosuDo, setReplacementIznosuDo] = useState('300 (trista)');
    const [replacementDateDocument, setReplacementDateDocument] = useState(formatDate());

    console.log('formatDate', formatDate())

    const handleChangeReplacementSurname = (event) => {
        setReplacementSurname(event.target.value.toUpperCase());
    };

    const handleChangeReplacementName = (event) => {
        setReplacementName(event.target.value.toUpperCase());
    };

    const handleChangeReplacementKo = (event) => {
        setReplacementKo(event.target.value.toUpperCase());
    };

    const handleChangeReplacementZakupacSurname = (event) => {
        setReplacementZakupacSurname(event.target.value.toUpperCase());
    };

    const handleChangeReplacementZakupacName = (event) => {
        setReplacementZakupacName(event.target.value.toUpperCase());
    };

    const processDocument = async () => {
        try {
            // Загрузка шаблонного документа
            const response = await fetch('/izjava.docx'); // Предполагается, что файл template.docx находится в папке public
            const arrayBuffer = await response.arrayBuffer();

            // Инициализация PizZip с загруженным документом
            const zip = new PizZip(arrayBuffer);
            const doc = new Docxtemplater(zip);

            // Замена меток в шаблоне на введенные тексты
            doc.setData({
                idtext: replacementId,
                surname: replacementSurname,
                name: replacementName,
                birthday: replacementBirthday,
                jmbtext: replacementJmb,
                iznosutext: replacementIznosu,
                optinatext: replacementOptina,
                kotext: replacementKo,
                parceletext: replacementParcele,
                zgradetext: replacementZgrade,
                nepokretnostitext: replacementNepokretnosti,
                stantext: replacementStantext,
                sprattext: replacementSprat,
                zakupacSurname: replacementZakupacSurname,
                zakupacName: replacementZakupacName,
                zakupacBirthdate: replacementZakupacBirthdate,
                citizen: replacementCitizen,
                password: replacementPassword,
                dateofissue: replacementDateOfIssue,
                expirydate: replacementExpiryDate,
                propertyLease: replacementPropertyLease,
                comment: replacementComment,
                conclude: replacementConclude,
                concludedo: replacementConcludeDo,
                iznosudo: replacementIznosuDo,
                datedocument: replacementDateDocument,
            });

            // Рендеринг и генерация измененного документа
            doc.render();
            const outputBuffer = doc.getZip().generate({ type: 'blob' });

            // Сохранение измененного документа на устройстве пользователя
            saveAs(outputBuffer, 'Izjava_kapara.docx');
        } catch (error) {
            console.error('Error processing document:', error);
        }
    };

    return (
        <>
            <Typography variant="h4" gutterBottom>Word Document Processor</Typography>
            <div className="main">
                <div className="leftcontainer">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        processDocument();
                    }}>
                        <TextField
                            label="id"
                            value={replacementId}
                            onChange={(e) => setReplacementId(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Фамилия"
                            value={replacementSurname}
                            onChange={handleChangeReplacementSurname}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Имя"
                            value={replacementName}
                            onChange={handleChangeReplacementName}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Дата рождения"
                            value={replacementBirthday}
                            onChange={(e) => setReplacementBirthday(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="JMB"
                            value={replacementJmb}
                            onChange={(e) => setReplacementJmb(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="iznosu"
                            value={replacementIznosu}
                            onChange={(e) => setReplacementIznosu(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                    </form>
                </div>
                <div className="leftcontainer">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        processDocument();
                    }}>
                        <TextField
                            label="Optina"
                            value={replacementOptina}
                            onChange={(e) => setReplacementOptina(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="K.O."
                            value={replacementKo}
                            onChange={handleChangeReplacementKo}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Broj parcele"
                            value={replacementParcele}
                            onChange={(e) => setReplacementParcele(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Broj zgrade"
                            value={replacementZgrade}
                            onChange={(e) => setReplacementZgrade(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="List nepokretnosti"
                            value={replacementNepokretnosti}
                            onChange={(e) => setReplacementNepokretnosti(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="stan"
                            value={replacementStantext}
                            onChange={(e) => setReplacementStantext(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Sprat"
                            value={replacementSprat}
                            onChange={(e) => setReplacementSprat(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                    </form>
                </div>
                <div className="leftcontainer">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        processDocument();
                    }}>
                        <TextField
                            label="Zakupac surname"
                            value={replacementZakupacSurname}
                            onChange={handleChangeReplacementZakupacSurname}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Zakupac name"
                            value={replacementZakupacName}
                            onChange={handleChangeReplacementZakupacName}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Zakupac birthdate"
                            value={replacementZakupacBirthdate}
                            onChange={(e) => setReplacementZakupacBirthdate(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="državljanin"
                            value={replacementCitizen}
                            onChange={(e) => setReplacementCitizen(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="pasoš"
                            value={replacementPassword}
                            onChange={(e) => setReplacementPassword(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="datum izdavanja"
                            value={replacementDateOfIssue}
                            onChange={(e) => setReplacementDateOfIssue(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="rok važenja"
                            value={replacementExpiryDate}
                            onChange={(e) => setReplacementExpiryDate(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                    </form>
                </div>
                <div className="leftcontainer">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        processDocument();
                    }}>
                        <TextField
                            label="zakupa imovine"
                            value={replacementPropertyLease}
                            onChange={(e) => setReplacementPropertyLease(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Комментарий"
                            value={replacementComment}
                            onChange={(e) => setReplacementComment(e.target.value)}
                            fullWidth
                            margin="normal"
                            multiline
                        />
                        <TextField
                            label="mora biti zaključen"
                            value={replacementConclude}
                            onChange={(e) => setReplacementConclude(e.target.value)}
                            fullWidth
                            margin="normal"
                            sx={{ width: '500px' }}
                        />
                        <TextField
                            label="mora biti zaključen do"
                            value={replacementConcludeDo}
                            onChange={(e) => setReplacementConcludeDo(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="iznosu od"
                            value={replacementIznosuDo}
                            onChange={(e) => setReplacementIznosuDo(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="date"
                            value={replacementDateDocument}
                            onChange={(e) => setReplacementDateDocument(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Process Document
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default WordProcessor;
