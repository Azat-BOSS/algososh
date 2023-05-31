import React, { useCallback, useMemo, useState } from "react";
import stringStyle from "./string.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";

import { Circle } from "../ui/circle/circle";
import { Button } from "../ui/button/button";
import { Input } from "../ui/input/input";
import { ElementStates } from "../../types/element-states";
import { delay } from "../../utils/utils";

type TArray = {
  value: string;
  color: ElementStates;
};

export const StringComponent: React.FC = () => {
  const [input, setInput] = useState("")
  const [stringArr, setString] = useState<Array<TArray>>([]);
  const [loader, setLoader] = useState(false)
  console.log(stringArr)

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value.trim()
    setInput(value)
  }

  const swap = (arr: string[], startIdx: number, endIdx: number) => {
    const temp = arr[startIdx];
    arr[startIdx] = arr[endIdx];
    arr[endIdx] = temp;
    return arr;
  }

  const reverse = async(arr: any, setString: any, setLoader: any) => {
    setLoader(true);
    const mid = Math.ceil(arr.length / 2);
  
    for (let i = 0; i < mid; i++) {
      let j = arr.length - 1 - i;
  
      if (i !== j) {
        arr[i].color = ElementStates.Changing;
        arr[j].color = ElementStates.Changing;
        setString([...arr]);
        await delay(1000);
      };
  
      swap(arr, i, j);
  
      arr[i].color = ElementStates.Modified;
      arr[j].color = ElementStates.Modified;
  
      setString([...arr]);
    }
    setLoader(false);
  }

  const handleButton = () => {
    const newArr = input.split('').map((value => ({ value, color: ElementStates.Default })));
    reverse(newArr, setString, setLoader);
  };

  return (
    <SolutionLayout title="Строка">
      <div className={stringStyle.string}>
        <div className={stringStyle.container}>
          <div className={stringStyle.input__container}>
            <Input 
              placeholder="Введите текст" 
              maxLength={11} 
              onChange={handleInput} 
              value={input}/>
          </div>
          <Button text="Развернуть" onClick={handleButton} isLoader={loader}/>
        </div>
        <div className={stringStyle.stringCircle__container}>
          {stringArr?.map((item, index) =>
            <li key={index}>
              <Circle letter={item.value} state={item.color} />
            </li>)}
        </div>
      </div>
    </SolutionLayout>
  );
};
