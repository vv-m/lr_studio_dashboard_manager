import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import Input from 'shared/UI/Input/Input';
import Switcher from 'shared/UI/Switcher/Switcher';
import useExchangeRate from 'pages/Calculation/hooks/useExchangeRate';
import Icons from 'shared/components/Icons/Icons';
import IFormData, { defaultFormData, OPTIONS } from './Calculator.model';
import { IResults } from 'pages/Calculation/Calculation.model';

import s from './Calculator.module.scss';

interface ICalculator {
  flagCalculation: boolean;
  setFlagCalculation: React.Dispatch<React.SetStateAction<boolean>>;
  setResult: React.Dispatch<React.SetStateAction<IResults>>;
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const MARKUPCB = 4 / 100 + 1;

// Цены ЖД
const priceRailwayForKG = 2.4; // USD за кг
const priceRailwayForCUB = 290; // USD за куб

// Цены Авто
const priceAutoForKG = 5.8; // USD за кг
const priceAutoForCUB = 440; // USD за куб

// Цена Авиа
const priceAirForKG = 24; // USD за кг

const Calculator: FC<ICalculator> = memo(
  ({ flagCalculation, setFlagCalculation, setResult, setIsDisabled }) => {
    const { valueCurrency } = useExchangeRate();

    const [dataFrom, setDataForm] = useState<IFormData>(defaultFormData);

    const handlerChangeLength = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setDataForm((prev) => ({ ...prev, length: e.target.value }));
    }, []);

    const handlerChangeWidth = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setDataForm((prev) => ({ ...prev, width: e.target.value }));
    }, []);

    const handlerChangeHeight = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setDataForm((prev) => ({ ...prev, height: e.target.value }));
    }, []);

    const handlerChangeWeight = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setDataForm((prev) => ({ ...prev, weight: e.target.value }));
    }, []);

    const handlerChangePrice = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setDataForm((prev) => ({ ...prev, price: e.target.value }));
    }, []);

    const handleCurrencyChange = useCallback(
      (currency: string) => setDataForm((prev) => ({ ...prev, currency: currency })),
      [],
    );

    const handlerReset = useCallback(() => {
      setDataForm(defaultFormData);
      setResult({ avia: '', avto: '', train: '' });
    }, [setResult]);

    useEffect(() => {
      const allFieldsFilled = Object.values(dataFrom).every((value) => value !== '');
      setIsDisabled(!allFieldsFilled);
    }, [dataFrom, setIsDisabled]);

    useEffect(() => {
      if (flagCalculation) {
        let currentCurrencyValue = 0;
        let priceRuble = 0;
        if (dataFrom.currency === 'USD') {
          currentCurrencyValue = +valueCurrency.USD * MARKUPCB;
        }
        if (dataFrom.currency === 'RMB') {
          currentCurrencyValue = +valueCurrency.RMD * MARKUPCB;
        }
        priceRuble = +dataFrom.price * currentCurrencyValue;

        const volume =
          (Number(dataFrom.length) * Number(dataFrom.width) * Number(dataFrom.height)) /
          1000000;

        // ======= ЖД =======
        const coastRailwayKG =
          Number(dataFrom.weight) * priceRailwayForKG * currentCurrencyValue + priceRuble;
        const coastRailwayCUB =
          volume * priceRailwayForCUB * currentCurrencyValue + priceRuble;
        const coastRailway = Math.max(coastRailwayKG, coastRailwayCUB);

        // ======= АВТО =======
        const coastAutoKG =
          Number(dataFrom.weight) * priceAutoForKG * currentCurrencyValue + priceRuble;
        const coastAutoCUB = volume * priceAutoForCUB * currentCurrencyValue + priceRuble;
        const coastAuto = Math.max(coastAutoKG, coastAutoCUB);

        // ======= АВИА =======
        let coastAir =
          Number(dataFrom.weight) * priceAirForKG * currentCurrencyValue + priceRuble;
        let aviaResult = '';
        if (Number(dataFrom.weight) > 50) {
          aviaResult = 'Вес превышен (до 50кг)';
        } else {
          aviaResult = Math.round(coastAir).toLocaleString('ru-RU');
        }

        setResult({
          avia: aviaResult,
          avto: Math.round(coastAuto).toLocaleString('ru-RU'),
          train: Math.round(coastRailway).toLocaleString('ru-RU'),
        });

        setFlagCalculation(false);
      }
    }, [flagCalculation, dataFrom, valueCurrency, setResult, setFlagCalculation]);

    return (
      <div className={s.form}>
        <div className={s.title}>Габариты груза</div>
        <div className={s.inputs}>
          <Input
            onChange={handlerChangeLength}
            value={dataFrom.length}
            label="Длина"
            typeValue="cм"
          />
          <Input
            onChange={handlerChangeWidth}
            value={dataFrom.width}
            label="Ширина"
            typeValue="см"
          />
          <Input
            onChange={handlerChangeHeight}
            value={dataFrom.height}
            label="Высота"
            typeValue="cм"
          />
          <Input
            onChange={handlerChangeWeight}
            value={dataFrom.weight}
            label="Вес"
            typeValue="кг"
          />
        </div>
        <div className={s.title}>Стоимость</div>
        <div className={s.price}>
          <Input
            onChange={handlerChangePrice}
            value={dataFrom.price}
            label="Цена"
            typeValue="$"
          />
          <div>
            <Switcher
              options={OPTIONS}
              onChange={handleCurrencyChange}
              label="Валюта"
              selectedOption={dataFrom.currency}
            />
          </div>
          <div />
          <div />
        </div>
        <div className={s.reset}>
          <button className={s.button} onClick={handlerReset}>
            <Icons name="Reset" />
            <span>Сбросить</span>
          </button>
        </div>
      </div>
    );
  },
);

export default Calculator;
