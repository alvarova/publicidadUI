import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule, ChartComponent, ApexChart, ApexAxisChartSeries, ApexXAxis, ApexDataLabels, ApexStroke, ApexYAxis, ApexTitleSubtitle, ApexFill, ApexTooltip } from 'ng-apexcharts';
import { toast } from 'ngx-sonner';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  status: string;
  quantity: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    NgApexchartsModule,
    TableModule,
    ButtonModule,
    CardModule,
    TagModule,
    ProgressSpinnerModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  
  public chartOptions: Partial<ChartOptions>;
  public pieChartOptions: Partial<ChartOptions>;
  
  products: Product[] = [];
  loading = false;

  constructor() {
    // Line Chart
    this.chartOptions = {
      series: [
        {
          name: 'Sales',
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: 'Revenue',
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yaxis: {
        title: {
          text: 'Values'
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.3,
          stops: [0, 90, 100]
        }
      }
    };

    // Pie Chart
    this.pieChartOptions = {
      series: [44, 55, 13, 43, 22] as any,
      chart: {
        type: 'pie',
        height: 350
      },
      dataLabels: {
        enabled: true
      },
      fill: {
        type: 'gradient'
      }
    };
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.products = [
      { id: 1, name: 'Product A', category: 'Electronics', price: 299.99, status: 'In Stock', quantity: 45 },
      { id: 2, name: 'Product B', category: 'Clothing', price: 49.99, status: 'Low Stock', quantity: 5 },
      { id: 3, name: 'Product C', category: 'Books', price: 19.99, status: 'In Stock', quantity: 120 },
      { id: 4, name: 'Product D', category: 'Electronics', price: 599.99, status: 'Out of Stock', quantity: 0 },
      { id: 5, name: 'Product E', category: 'Home & Garden', price: 89.99, status: 'In Stock', quantity: 33 }
    ];
  }

  showSuccess() {
    toast.success('Success!', {
      description: 'Operation completed successfully',
      duration: 3000
    });
  }

  showError() {
    toast.error('Error!', {
      description: 'Something went wrong',
      duration: 3000
    });
  }

  showInfo() {
    toast.info('Information', {
      description: 'This is an informational message',
      duration: 3000
    });
  }

  simulateLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.showSuccess();
    }, 2000);
  }

  getSeverity(status: string): 'success' | 'danger' | 'warn' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warn';
      default:
        return 'success';
    }
  }
}
