import { Component } from '@angular/core';
import NavbarItem, {EntityNavbarItems} from './navbar-item.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  inProduction?: boolean;
  isNavbarCollapsed = true;
  openAPIEnabled?: boolean;
  entitiesNavbarItems: NavbarItem[] = [];
  status: boolean = false;
  openSidebar: boolean = false;

  // Data para configurar navbar
  dataNavBarEntities: any[] = [    
    {
         id: 22,
         text: 'Plan',
         route: '/plan',
     },
     {
         id: 23,
         text: 'Tipo Servicio',
         route: '/tipo-servicio',
     },
    {
        id: 24,
        text: 'Puerto Servicio Onu Tipo',
        route: '/puerto-servicio-onu-tipo',
    },
    {
        id: 25,
        text: 'Lineas Por Ata',
        route: '/lineas-por-ata',
    },
    {
        id: 27,
        text: 'Port',
        route: '/port',
    },
  {
    id: 34,
    text: 'Nap',
    route: '/nap',
  },
  {
    id: 35,
    text: 'Squad',
    route: '/squad',
  },
  {
    id: 36,
    text: 'Vendor-Nap',
    route: '/vendor-nap',
  },
  {
    id: 37,
    text: 'Model-Nap',
    route: '/model-nap',
  }
];

  dataNavBarAdmin: any[] = [
    {
        id: 1,
        text: 'Gateway',
        route: '/admin/gateway',
    },
    {
        id: 2,
        text: 'Gestión de usuarios',
        route: '/admin/user-management',
    },
    {
        id: 3,
        text: 'Métricas',
        route: '/admin/metrics',
    },
    {
        id: 4,
        text: 'Salud',
        route: '/admin/health',
    },
    {
        id: 5,
        text: 'Configuración',
        route: '/admin/configuration',
    }
];

  menuSidebar = [
    {
      link_name: "Configuración de Abonados",
      link: "null",
      icon: "bx bx-user",
      sub_menu: [
        {
          link_name: "Abonados",
          link: "/usuario",
        },
        {
          link_name: "Planes",
          link: "/plan",
        }
      ]
    },{
      link_name: "Configuración de Terminadores",
      link: "null",
      icon: "bx bx-slider-alt",
      sub_menu: [
        {
          link_name: "Olt Vendor",
          link: "/olt-marca",
        },{
          link_name: "Olt Modelo",
          link: "/olt-modelo",
        },{
          link_name: "Olt",
          link: "/olt",
        },{
          link_name: "Vlan",
          link: "/vlan",
        },
        {
          link_name: "Onu Vendor",
          link: "/onu-marca",
        },
        {
          link_name: "Onu Tipo",
          link: "/onu-tipo",
        },
        {
          link_name: "Nap",
          link: "/nap",
        },
        {
          link_name: "Vendor Nap",
          link: "/vendor-nap",
        },
        {
          link_name: "Model Nap",
          link: "/model-nap",
        }
      ]
    },{
      link_name: "Configuración General",
      link: "null",
      icon: "bx bx-customize",
      sub_menu: [
        {
          link_name: "Ciudad",
          link: "/ciudad",
        },{
          link_name: "Parámetros",
          link: "/parameter",
        },{
          link_name: "Tabla de Traficos",
          link: "/traffic",
        },{
          link_name: "Tipo de Puertos",
          link: "/port-type",
        },{
          link_name: "Tipo Servicio",
          link: "/tipo-servicio",
        }
      ]
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
      this.entitiesNavbarItems = EntityNavbarItems;
  }

  clickEvent() {
      this.status = !this.status;
  }

  changeLanguage(languageKey: string): void {
  }

  collapseNavbar(): void {
      this.isNavbarCollapsed = false;
  }

  

  logout(): void {
      this.collapseNavbar();      
  }

  showSubmenu(itemEl: HTMLElement) {
      itemEl.classList.toggle("showMenu");
  }

  onSidebarToggle(event: Event): void {
      this.openSidebar = (event.target as HTMLInputElement).checked;
  }
}
