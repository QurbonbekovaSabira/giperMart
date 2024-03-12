import React from "react";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { FacebookIcon } from "../../assets/icon/facebook-icon";
import { OKIcon } from "../../assets/icon/OK-icon";
import { WkIcon } from "../../assets/icon/Wk-icon";
import { YouTubeIcon } from "../../assets/icon/you-tube-icon";
import { InstagramIcon } from "../../assets/icon/instagram-icon";
import { UzcardIcon } from "../../assets/icon/uzcard-icon";
import { HumoIcon } from "../../assets/icon/humo-icon";
import { PaymeIcon } from "../../assets/icon/payme-icon";

export const Footer = () => {
  return (
    <>
      <div className="bg-white-smoke px-[56px] py-[40px]">
        <div className="container flex justify-between">
          <div>
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
            <div className="mb-4">
              <p className="mb-[2px] mt-[21px] text-xl font-medium text-carbon">
                +99 893 374-66-44
              </p>
              <p className="mb-[12px] text-sm font-normal text-carbon">
                справочная служба
              </p>
              <p className="mb-[2px] text-xl font-medium text-carbon">
                +99 890 253-77-53
              </p>
              <p className="mb-[12px] text-sm font-normal text-carbon">
                интернет-магазин
              </p>
            </div>
            <p className="mb-2 text-sm font-semibold text-carbon">
              Оставайтесь на связи
            </p>
            <div className="flex items-center gap-4">
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <OKIcon />
              </a>
              <a href="#">
                <WkIcon />
              </a>
              <a href="#">
                <YouTubeIcon />
              </a>
              <a href="#">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-sm font-normal text-carbon">
              Условия обмена и возврата
            </a>
            <a href="#" className="text-sm font-normal text-carbon">
              Каталог
            </a>
            <a href="#" className="text-sm font-normal text-carbon">
              О компании
            </a>
            <a href="#" className="text-sm font-normal text-carbon">
              Контакты
            </a>
            <a href="#" className="text-sm font-normal text-carbon">
              Доставка
            </a>
            <a href="#" className="text-sm font-normal text-carbon">
              Оплата
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-sm font-normal text-carbon">
              Клиентам
            </a>
            <a href="#" className="text-sm font-normal text-carbon">
              Личный кабинет
            </a>
            <a href="#" className="text-sm font-normal text-carbon">
              Блог
            </a>
            <a href="#" className="text-sm font-normal text-carbon">
              Обратная связь
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-sm font-normal text-carbon">
              Информация
            </a>
            <a href="#" className="text-sm font-normal text-carbon">
              Пользовательское соглашение
            </a>
            <a href="#" className="text-sm font-normal text-carbon">
              Политика конфиденциальности и оферта
            </a>
          </div>
        </div>
      </div>
      <div className="bg-plaster py-[23px]">
        <div className="container flex items-center justify-between">
          <p className="text-sm font-normal text-carbon">
            © 2022 Любое использование контента без письменного разрешения
            запрещено
          </p>
          <div className="flex items-center gap-6">
            <a href="#">
              <PaymeIcon />
            </a>
            <a href="#">
              <UzcardIcon />
            </a>
            <a href="#">
              <HumoIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
