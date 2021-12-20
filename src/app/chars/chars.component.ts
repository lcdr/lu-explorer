import { Component } from "@angular/core";

@Component({
  selector: "app-chars",
  templateUrl: "./chars.component.html",
  styleUrls: ["./chars.component.css"]
})
export class CharsComponent {
  xml: XMLDocument;
  names: { [key: string]: { [key: string]: string | { [key: string]: string } } } = {
    "mf" : {
      name: "Minifig Component",
      attrs: {
        "hc": "Hair color",
        "hs": "Hair style",
        "hd": "Head style",
        "t": "Torso color",
        "l": "Legs color",
        "hdc": "Head color",
        "cd": "Torso decal",
        "lh": "Left hand color",
        "rh": "Right hand color",
        "es": "Eyebrows style",
        "ess": "Eyes style",
        "ms": "Mouth style"
      }
    },
    "char": {
      name: "Character Component",
      attrs: {
        "gm": "GM Level",
        "edit": "Editor Level",
        "acct": "Account ID",
        "llog": "Last logout",
        "ttip": "Tooltip flags",
        "mldt": "Last property moderation status update notice display time",
        "lzid": "Last zone ID",
        "lzx": "Last zone position X",
        "lzy": "Last zone position Y",
        "lzz": "Last zone position Z",
        "lzrx": "Last zone rotation X",
        "lzry": "Last zone rotation Y",
        "lzrz": "Last zone rotation Z",
        "lzrw": "Last zone rotation W",
        "lzcs": "Last zone checksum",
        "gid": "Last zone checksum",
        "lcbp": "Last custom build parts",
        "v": "Number of votes remaining today",
        "vd": "Last vote update date",
        "time": "Total number of seconds played",
        "stime": "Seconds played this session",
        "lrx": "Last respawn checkpoint position X",
        "lry": "Last respawn checkpoint position Y",
        "lrz": "Last respawn checkpoint position Z",
        "lrrx": "Last respawn checkpoint rotation X",
        "lrry": "Last respawn checkpoint rotation Y",
        "lrrz": "Last respawn checkpoint rotation Z",
        "lrrw": "Last respawn checkpoint rotation W",
        "ls": "U-Score",
        "ft": "Is in free trial mode",
        "co": "Claim codes",
        "stt": "Stats",
      }
    },
    "lvl": {
      name: "Level Progression Component",
      attrs: {
        "l": "Level",
        "cv": "Character version",
        "sb": "Speed boost",
      }
    },
    "mnt": {
      name: "Player Mount Component",
      attrs: {
        "a": "Current mount ID"
      }
    },
    "dest": {
      name: "Destroyable Component",
      attrs: {
        "hc": "Current life points",
        "hm": "Maximum life points",
        "ac": "Current armor points",
        "am": "Maximum armor points",
        "ic": "Current imagination points",
        "im": "Maximum imagination points",
        "rsh": "Respawn life points",
        "rsi": "Respawn imagination points",
        "d": "Is dead",
        "imm": "Is GM immune",
      }
    }
  };

  onCharXml(target: any) {
    const file = target.files[0];
    var reader = new FileReader();
    reader.onload = () => {
      const parser = new DOMParser();
      this.xml = parser.parseFromString(reader.result as string, "application/xml");
      console.log(this.xml);
      console.log(this.names);
    };
    reader.readAsText(file);
  }

  iter(c: NodeListOf<Element> | HTMLCollection): Element[] {
    return Array.from(c);
  }
}
