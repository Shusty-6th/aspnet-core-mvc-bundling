import { GetNumer, ComputeNumber } from '../myCommon';

interface Props {
    x: number;
    y: number;
  }

class Value {
    private value = 10

    private props: Props = { x: 0, y: 0 };

    getValue(): number {
      return this.value;
    }

    setValue(value: number): void {
      this.value = value;
    }

    setProps(props: Props) {
      this.props = props;
    }

    getProps(): Props {
      return this.props;
    }
}

const value = new Value();
value.setValue(1008);
value.getValue();

const value1 = new Value();
value1.setProps({ x: 1000, y: 1000 });


const a  = 'Its string in FOO!';



console.log(a + GetNumer());

console.log(ComputeNumber(10));

(document.getElementById('input1') as HTMLInputElement).value = 'foo.ts Works!';
