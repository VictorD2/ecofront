import { AiFillApi, AiFillApple, AiFillAndroid, AiFillRead } from 'react-icons/ai'
import { BsFillDropletFill, BsFillEnvelopeFill, BsFillFlagFill, BsFillLightningChargeFill, BsFillUmbrellaFill, BsBatteryCharging, BsBox, BsController, BsScissors, BsTree } from 'react-icons/bs'
import { BiAlarm, BiBody, BiCoffeeTogo, BiSun } from 'react-icons/bi'
import { FiWatch } from 'react-icons/fi'
import { GiSonicShoes,GiMedicinePills, GiNecklaceDisplay, GiNoodles } from 'react-icons/gi'
import { IoMdGlasses } from 'react-icons/io'
import { IoHeart, IoFastFood } from 'react-icons/io5'
import { FaIcons, FaMusic, FaRegSnowflake, FaWrench, FaPalette } from 'react-icons/fa';
import { IconType } from "react-icons/lib";
interface icon {
    icono: IconType;
}
class Categoria {
    private listaIconos: icon[] = [];
    constructor() {
        this.listaIconos = [{ icono: GiNoodles },{ icono: GiMedicinePills }, { icono: FaIcons }, { icono: FaMusic }, { icono: FaRegSnowflake }, { icono: FaWrench }, { icono: FaPalette }, { icono: IoHeart }, { icono: IoFastFood }, { icono: IoMdGlasses }, { icono: GiSonicShoes }, { icono: GiNecklaceDisplay }, { icono: FiWatch }, { icono: AiFillApi }, { icono: AiFillApple }, { icono: AiFillAndroid }, { icono: AiFillRead }, { icono: BsFillDropletFill }, { icono: BsFillEnvelopeFill }, { icono: BsFillFlagFill }, { icono: BsFillLightningChargeFill }, { icono: BsFillUmbrellaFill }, { icono: BsBatteryCharging }, { icono: BsBox }, { icono: BsController }, { icono: BsScissors }, { icono: BsTree }, { icono: BiAlarm }, { icono: BiBody }, { icono: BiCoffeeTogo }, { icono: BiSun }]
    }
    getListaIconos(): icon[] {
        return this.listaIconos;
    }
}
export default new Categoria();