import { useSelector } from "react-redux";
import { selectValue } from "../../redux/moneySlice";

import Swal from "sweetalert2";

import CountUp from "react-countup";

function CashRegister() {
  const diffMoney = useSelector((state) => state.money.diffMoney);
  const value = useSelector(selectValue);

  let nonsense = value + diffMoney;

  const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  if (value < 0) {
    Toast.fire({
      title: "Bill's in debt!",
      icon: "error",
    });
  }
  return (
    <div className="money-bar">
      <h1>$ </h1>
      <h1>
        <CountUp
          start={nonsense}
          end={value}
          delay={0}
          decimal="."
          separator=","
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      </h1>
    </div>
  );
}

export default CashRegister;
