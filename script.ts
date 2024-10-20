class System {
    private isCopyable: boolean = false

    Randomizer(): string {
        const character: string = "1234567890abcdefABCDEF";
        let HEXCode: string = "#";

        for (let index = 0; index < 6; index++) {
            HEXCode += character[Math.floor(Math.random() * character.length)];
        }

        return HEXCode;
    }

    async GACHASystem() {
        let ms: number = 50;
        let count: number = 0;

        while (isRun) {
            await sleep(ms);
            count++;

            const HEXCode = this.Randomizer();
            document.body.style.backgroundColor = HEXCode;
            txt.textContent = HEXCode;

            if (ms >= 1500) {
                isRun = false;
                ui.cancelGacha();
                break
            }

            if (count % 2 !== 0) {
                ms += 100;
                continue
            }
        }
    }

    CopySystem() {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(txt.textContent)
                .then(async () => {
                    ui.animateCopied();
                })
                .catch((err) => {
                    console.log("Error uy..." + err);
                })
        })
    }
}

class UI {
    public reload = document.createElement("i");
    public angle: number = 0;
    public isRotate: boolean = false;

    animateGacha() {
        btn.textContent = '';

        btn.style.borderRadius = '60px';
        btn.style.padding = '9px 13px';

        if (!this.isRotate) {
            this.isRotate = true;
            btn.appendChild(this.reload);
            this.reload.classList.add("fa-solid", "fa-rotate-right");
        }
    }

    cancelGacha() {
        this.isRotate = false;
        this.reload.classList.remove('fa-solid', 'fa-rotate-rigth');
        btn.removeChild(this.reload);

        btn.style.borderRadius = '0px';
        btn.style.padding = '10px 25px';
        btn.textContent = 'GACHA!';
    }

    async animateCopied() {
        const copyIcon = document.getElementById("copy");
        const checkIcon = document.createElement('i');

        copyIcon.style.transform = 'rotate(180deg)';
        await sleep(200);
        copyIcon.style.opacity = '0';
        copyIcon.style.display = 'none';
        await sleep(50);
        checkIcon.classList.add('fa-solid', 'fa-check');
        copyBtn.appendChild(checkIcon);
        await sleep(50);
        checkIcon.style.opacity = '100%';
        checkIcon.style.transform = 'rotate(360deg)';
        await sleep(50);
        checkIcon.style.color = 'lime';
        await sleep(1500);
        checkIcon.style.color = 'white';
        checkIcon.style.transform = 'rotate(0deg)';
        checkIcon.style.opacity = '0';
        await sleep(200);
        copyBtn.removeChild(checkIcon);
        copyIcon.style.display = 'block';
        copyIcon.style.opacity = '100%';
        copyIcon.style.transform = 'rotate(0deg)';
    }
}

// SLEEP
const sleep = (ms: number) => {
    return new Promise(r => {
        setTimeout(r, ms);
    })
}

// MAIN
let isRun: boolean = false;
const copyBtn = document.getElementById("copyBtn");
const txt = document.getElementById("text");
const btn = document.getElementById("btn");
const system = new System();
const ui = new UI();

// OPENING
const HEXCode = system.Randomizer();
document.body.style.backgroundColor = HEXCode;
txt.textContent = HEXCode;

// EventListener
btn.addEventListener('click', () => {
    if (!isRun) {
        isRun = true;
        ui.animateGacha();
        system.GACHASystem();
    } else {
        isRun = false;
        ui.cancelGacha();
    }
})

system.CopySystem();