import React from "react";
import Drawer from "../drawer/index";
import pluralRu from "plural-ru";
import "./styles.css";

function Controls(props) {
	console.log("Controls");
	const { basket } = props;
	const [open, setOpen] = React.useState(false);
	const totalQty = basket.map((el) => el.qty).reduce((acc, el) => acc + el, 0);

	return (
		<div className='Controls'>
			{!basket.length ? (
				<span>
					В корзине: <b>пусто</b>{" "}
				</span>
			) : (
				<span>
					В корзине:{" "}
					<b>
						{totalQty} {pluralRu(totalQty, "товар", "товара", "товаров")} /{" "}
						{basket.reduce((acc, el) => {
							return acc + el.price * el.qty;
						}, 0)}{" "}
						&#8381;
					</b>{" "}
				</span>
			)}
			<button onClick={() => setOpen(true)}> Перейти </button>
			<Drawer basket={basket} open={open} setOpen={setOpen} totalQty={totalQty} />
		</div>
	);
}

export default React.memo(Controls);
