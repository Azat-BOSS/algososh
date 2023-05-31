import React, { useCallback, useState } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";

export const FibonacciPage: React.FC = () => {
  const [value, setValue] = useState<string>("")
  const [crnValue, setCrnValue] = useState<number[]>([])

  const fibonacci = useCallback(() => {
    let seq = [0, 1]
    for(let i = 2; i <= Number(value); i++) {
      seq.push(seq[i - 2] + seq[i - 1])
      setTimeout(() => {
        setCrnValue([...crnValue, crnValue.push(seq[i])])
        console.log(crnValue)
      }, i * 1000)
    }
  }, [crnValue, setCrnValue, value])



  return (
    <SolutionLayout title="Последовательность Фибоначчи">
      <Input 
        placeholder="Введите текст" 
        maxLength={11} 
        onChange={(evt: any) => setValue(evt.target.value)} 
        value={value}
        type="number"/>
      <Button onClick={fibonacci} text={"Рассчитать"}></Button>
      {crnValue.map((num: any) => (
        <Circle letter={num}/>
      ))}

    </SolutionLayout>
  );
};
