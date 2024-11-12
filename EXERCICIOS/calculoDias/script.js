const dia_atual = document.querySelector("#dia_atual")
const dia_calc = document.querySelector("#dia_calc")
const res = document.querySelector("#res")
const confirmar = document.querySelector("#confirmar")

function calculoDias() {
    if (!dia_atual || !dia_calc) {
        alert('Preencha os campos corretamente.')
        return;
    }


    let date1 = new Date(dia_atual.value);
    let date2 = new Date(dia_calc.value);

    if (date1 < date2) {
        [date1, date2] = [date2, date1]
    }

    const diffMiliseconds = Math.abs(date1 - date2);
    /*
    1000 milisegundos = 1 seg
    60 segundos = 1 dia
    60 minutos = 1 hora
    24 horas = 1 dia
    */
    const diffDays = Math.floor(diffMiliseconds / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    let diffMonths = date1.getMonth() - date2.getMonth();
    let diffYears = date1.getFullYear() - date2.getFullYear();

    let totalMonths = (diffYears * 12) + diffMonths

    res.innerHTML =
        `   
            A diferença completa de:
            <br>Dias = <strong>${diffDays} dia(s)</strong>
            ${diffWeeks > 0 ? `<br>Semanas = <strong>${diffWeeks} semana(s)</strong>` : ""}
            ${totalMonths > 0 ? `<br>Meses = <strong>${totalMonths} mês(es)</strong>` : ""}
            ${diffYears > 0 ? `<br>Anos = <strong>${diffYears} ano(s)</strong>` : ""}
        `
}

confirmar.addEventListener('click', calculoDias)