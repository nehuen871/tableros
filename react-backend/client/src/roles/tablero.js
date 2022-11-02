
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 
import '../styles/index.css';
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { ProductService } from './ProductService';
import '/opt/tableroAPP2/react-backend/client/src/tablero/DataTableDemo.css';

export default class Tabla extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products1: null,
            products2: null,
            products3: null,
            products4: null,
            editingRows: {}
        };

        this.columns = [
            { field: 'idtableros', header: 'idtableros' },
            { field: 'nombre', header: 'nombre' },
            { field: 'url', header: 'url' },
            { field: 'accessToken', header: 'accessToken' },
            { field: 'id', header: 'Id' }
        ];

        this.statuses = [
            { label: 'In Stock', value: 'INSTOCK' },
            { label: 'Low Stock', value: 'LOWSTOCK' },
            { label: 'Out of Stock', value: 'OUTOFSTOCK' }
        ];

        this.productService = new ProductService();

        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
        this.onCellEditComplete = this.onCellEditComplete.bind(this);
        this.onRowEditComplete1 = this.onRowEditComplete1.bind(this);
        this.onRowEditComplete2 = this.onRowEditComplete2.bind(this);
        this.onRowEditChange = this.onRowEditChange.bind(this);
    }

    componentDidMount() {
        this.fetchProductData('products4');
    }

    fetchProductData(productStateKey) {
        this.productService.getProductsSmall().then(data => this.setState({ [`${productStateKey}`]: data }));
        console.log(this.state);
    }

    isPositiveInteger(val) {
        let str = String(val);
        str = str.trim();
        if (!str) {
            return false;
        }
        str = str.replace(/^0+/, "") || "0";
        let n = Math.floor(Number(str));
        return n !== Infinity && String(n) === str && n >= 0;
    }

    getStatusLabel(status) {
        switch (status) {
            case 'INSTOCK':
                return 'In Stock';

            case 'LOWSTOCK':
                return 'Low Stock';

            case 'OUTOFSTOCK':
                return 'Out of Stock';

            default:
                return 'NA';
        }
    }

    onCellEditComplete(e) {
        let { rowData, newValue, field, originalEvent: event } = e;

        switch (field) {
            case 'quantity':
            case 'price':
                if (this.isPositiveInteger(newValue))
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;

            default:
                if (newValue.trim().length > 0)
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;
        }
    }

    onRowEditComplete1(e) {
        let products2 = [...this.state.products2];
        let { newData, index } = e;

        products2[index] = newData;

        this.setState({ products2 });
    }

    onRowEditComplete2(e) {
        let products3 = [...this.state.products3];
        let { newData, index } = e;

        products3[index] = newData;

        this.setState({ products3 });
    }

    onRowEditChange(e) {
        this.setState({ editingRows: e.data });
    }

    setActiveRowIndex(index) {
        let editingRows = { ...this.state.editingRows, ...{ [`${this.state.products3[index].id}`]: true } };
        this.setState({ editingRows });
    }

    cellEditor(options) {
        if (options.field === 'price')
            return this.priceEditor(options);
        else
            return this.textEditor(options);
    }

    textEditor(options) {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    }

    statusEditor(options) {
        return (
            <Dropdown value={options.value} options={this.statuses} optionLabel="label" optionValue="value"
                onChange={(e) => options.editorCallback(e.value)} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={`product-badge status-${option.value.toLowerCase()}`}>{option.label}</span>
                }} />
        );
    }

    priceEditor(options) {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />
    }

    statusBodyTemplate(rowData) {
        return this.getStatusLabel(rowData.inventoryStatus);
    }

    priceBodyTemplate(rowData) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    }

    render() {
        return (
            <div className="datatable-editing-demo">
                <Toast ref={(el) => this.toast = el} />
                <div className="card p-fluid">
                    <h5>Cell Editing with Sorting and Filter</h5>
                    <DataTable value={this.state.products4} editMode="cell" className="editable-cells-table" filterDisplay="row" responsiveLayout="scroll">
                        {
                            this.columns.map(({ field, header }) => {
                                return <Column key={field} field={field} header={header} filter sortable style={{ width: '25%' }} body={field === 'price' && this.priceBodyTemplate}
                                    editor={(options) => this.cellEditor(options)} onCellEditComplete={this.onCellEditComplete} />
                            })
                        }
                    </DataTable>
                </div>
            </div>
        );
    }
}
                 