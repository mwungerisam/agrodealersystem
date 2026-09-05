import { o as __toESM } from "../_runtime.mjs";
import { j as money } from "./router-VEvSM2XK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pdf-DQDnY9vy.js
async function generateReportPdf(opts) {
	const [{ jsPDF }, autoTableModule] = await Promise.all([import("../_libs/jspdf.mjs").then((n) => /* @__PURE__ */ __toESM(n.t())), import("../_libs/jspdf-autotable.mjs").then((n) => n.t)]);
	const autoTable = autoTableModule.default;
	const doc = new jsPDF({
		unit: "mm",
		format: "a4"
	});
	const pageWidth = doc.internal.pageSize.getWidth();
	const lastY = () => doc.lastAutoTable.finalY;
	doc.setFillColor(10, 87, 42);
	doc.rect(0, 0, pageWidth, 34, "F");
	doc.setTextColor(255, 255, 255);
	doc.setFont("helvetica", "bold");
	doc.setFontSize(17);
	doc.text("UFBC AGRODEALER", 14, 15);
	doc.setFontSize(11);
	doc.text(opts.title, 14, 23);
	doc.setFont("helvetica", "normal");
	doc.setFontSize(8.5);
	doc.text(`${opts.period}  |  ${opts.branchName}`, 14, 29);
	autoTable(doc, {
		startY: 41,
		body: [[
			`Sales: ${money(opts.totals.sales)}`,
			`Profit: ${money(opts.totals.profit)}`,
			`Net profit: ${money(opts.totals.net)}`
		], [
			`Purchases: ${money(opts.totals.purchases)}`,
			`Expenses: ${money(opts.totals.expenses)}`,
			`Customers: ${opts.totals.customers}`
		]],
		theme: "grid",
		styles: {
			fontSize: 8.5,
			cellPadding: 3,
			fillColor: [
				246,
				250,
				247
			],
			textColor: [
				24,
				48,
				32
			]
		},
		tableLineColor: [
			205,
			220,
			209
		],
		tableLineWidth: .15
	});
	let y = lastY() + 9;
	const section = (title) => {
		doc.setFont("helvetica", "bold");
		doc.setTextColor(10, 87, 42);
		doc.setFontSize(11);
		doc.text(title, 14, y);
		doc.setTextColor(25, 25, 25);
		y += 3;
	};
	const base = {
		theme: "striped",
		styles: {
			fontSize: 7.5,
			cellPadding: 2.2
		},
		headStyles: {
			fillColor: [
				10,
				87,
				42
			],
			textColor: 255
		},
		alternateRowStyles: { fillColor: [
			247,
			250,
			248
		] },
		margin: {
			left: 14,
			right: 14
		}
	};
	if (opts.branchPerformance?.length) {
		section("Branch performance");
		autoTable(doc, {
			...base,
			startY: y,
			head: [[
				"Branch",
				"Sales",
				"Revenue",
				"Profit"
			]],
			body: opts.branchPerformance.map((row) => [
				row.branch,
				String(row.sales),
				money(row.revenue),
				money(row.profit)
			])
		});
		y = lastY() + 9;
	}
	if (opts.inventory?.length) {
		section("Available stock");
		autoTable(doc, {
			...base,
			startY: y,
			head: [[
				"Branch",
				"Product",
				"Available quantity",
				"Status"
			]],
			body: opts.inventory.map((item) => [
				item.branch,
				item.product,
				`${item.quantity.toLocaleString("en-US")} ${item.unit}`,
				item.status
			])
		});
		y = lastY() + 9;
	}
	section("Sales details");
	autoTable(doc, {
		...base,
		startY: y,
		head: [[
			"Date",
			"Branch",
			"Product",
			"Customer",
			"Qty",
			"Value",
			"Profit"
		]],
		body: opts.sales.map((sale) => [
			sale.date,
			sale.branch ?? opts.branchName,
			sale.product,
			sale.customer,
			String(sale.qty),
			money(sale.qty * sale.price),
			money(sale.profit)
		])
	});
	y = lastY() + 9;
	section("Purchase details");
	autoTable(doc, {
		...base,
		startY: y,
		head: [[
			"Date",
			"Branch",
			"Product",
			"Supplier",
			"Qty",
			"Unit cost",
			"Transport"
		]],
		body: opts.purchases.map((purchase) => [
			purchase.date,
			purchase.branch ?? opts.branchName,
			purchase.product,
			purchase.supplier,
			String(purchase.qty),
			money(purchase.price),
			money(purchase.transport)
		])
	});
	y = lastY() + 9;
	section("Expenses");
	autoTable(doc, {
		...base,
		startY: y,
		head: [[
			"Date",
			"Branch",
			"Description",
			"Amount"
		]],
		body: opts.expenses.map((expense) => [
			expense.date,
			expense.branch ?? opts.branchName,
			expense.description,
			money(expense.amount)
		])
	});
	const pages = doc.getNumberOfPages();
	for (let page = 1; page <= pages; page += 1) {
		doc.setPage(page);
		doc.setFontSize(7);
		doc.setTextColor(100, 110, 105);
		doc.text(`UFBC Agrodealer | Page ${page} of ${pages}`, 14, 290);
	}
	doc.save(`${opts.title.replace(/\s+/g, "_")}.pdf`);
}
//#endregion
export { generateReportPdf as t };
