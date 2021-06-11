import { ApplicationRef, ComponentFactory, ComponentFactoryResolver, ElementRef, Directive, Injector, Input, Renderer2 } from "@angular/core";
import { ItemTooltipComponent } from "./item-tooltip.component";
import { SlotComponent } from "../slot/slot.component";
import { TooltipDirective } from "../tooltip.directive";
import { LuJsonService, LuLocaleService } from "../../services";

@Directive({
  selector: "lux-slot[luxFetch]"
})
export class ItemDirective extends TooltipDirective {
  private itemTooltip: ItemTooltipComponent;

  @Input("luxFetch") set id(id: number) {
    this.slotComponent.link = `/objects/${id}`;
    this.luJson.getObject(id).subscribe(this.onObject);
  }

  constructor(
    element: ElementRef<HTMLElement>,
    applicationRef: ApplicationRef,
    renderer: Renderer2,
    injector: Injector,
    resolver: ComponentFactoryResolver,
    private luJson: LuJsonService,
    private luLocale: LuLocaleService,
    private slotComponent: SlotComponent
  ) {
    super(element, applicationRef, renderer, injector, resolver);

    const itemTooltipFactory = resolver.resolveComponentFactory(ItemTooltipComponent);
    const itemTooltip = itemTooltipFactory.create(injector);
    itemTooltip.instance.title = "Title";
    itemTooltip.instance.description = "Description";
    itemTooltip.instance.value = 1234;
    itemTooltip.instance.rarity = 2;
    itemTooltip.changeDetectorRef.detectChanges();
    this.itemTooltip = itemTooltip.instance;
    this.content = itemTooltip;
  }

  onObject = (object: any) => {
    if (object.displayName) {
      this.itemTooltip.title = object.displayName;
    } else if (object.name) {
      this.itemTooltip.title = object.name;
    }
    if (object.description) {
      this.itemTooltip.description = object.description;
    }
    /*for (let skill of object.skills) {
      this.itemTooltip.skills[skill.skillID] = new SkillInfo();
      this.luJson.getSkill(skill.skillID).subscribe(x => {
        this.itemTooltip.value = x.skillIcon;
        this.changeDetector.markForCheck();
      });
      this.luLocale.getLocaleEntry("SkillBehavior", skill.skillID).subscribe(x => {
        this.itemTooltip.skills[skill.skillID].description = x.descriptionUI;
        this.changeDetector.markForCheck();
      });
    }
    */
    const renderId = object.components["2"];
    if (renderId) {
      this.luJson.getRenderComponent(renderId).subscribe(x => this.slotComponent.icon = "/lu-res/textures/ui/" + x.icon_asset.toLowerCase().replace(/dds$/, "png"));
    }
    const itemId = object.components["11"];
    if (itemId) {
      this.luJson.getItemComponent(itemId).subscribe(this.onItemComponent);
    }
  }

  onItemComponent = (itemComponent: any) => {
    /*this.itemTooltip.rarity = itemComponent.rarity;
    this.itemTooltip.value = Math.floor(itemComponent.baseValue / 10);
    this.itemTooltip.altCurrencyValue = Math.floor(itemComponent.altCurrencyCost / 10);
    if (itemComponent.currencyLOT) {
      this.luJson.getObject(itemComponent.currencyLOT).subscribe(this.onCurrencyLOT);
    }*/
  }

  onCurrencyLOT = (object: any) => {
    /*const renderId = object.components["2"];
    if (renderId) {
      this.luJson.getRenderComponent(renderId).subscribe(x => this.itemTooltip.altCurrencyIcon = "/lu-res/textures/ui/" + x.icon_asset.toLowerCase().replace(/dds$/, "png"));
    }*/
  }

}
