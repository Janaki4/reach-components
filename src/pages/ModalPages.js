import Modal from "../component/modal";
import Button from "../component/Button";
import { useState } from "react";

function ModalPages() {
  const [showModal, setShowModal] = useState(false);
  const clickHandler = () => {
    setShowModal(!showModal);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const modal = (
    <Modal
      onClose={handleClose}
      actionBar={
        <Button success rounded onClick={handleClose}>
          Agree
        </Button>
      }
    >
      <p>Please agree to terms and conditions</p>
    </Modal>
  );
  return (
    <div>
      <Button primary rounded onClick={clickHandler}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius
        posuere erat eget sagittis. Duis suscipit pretium congue. Vivamus
        tristique risus quam, non condimentum nibh finibus fringilla. Morbi at
        orci aliquam, placerat sem mollis, imperdiet enim. Aenean vitae
        consectetur ipsum. Quisque tempus consectetur velit, in iaculis urna
        interdum ut. Nullam scelerisque eu metus et iaculis. Quisque tristique
        nisl sed justo dapibus vestibulum. Nulla efficitur vel orci eu aliquam.
        Ut eu dolor tristique, ullamcorper metus eget, consectetur justo.
        Suspendisse potenti. Duis dapibus sodales massa quis rhoncus. Aliquam
        erat volutpat. Pellentesque aliquam lorem quis nulla ultricies, sit amet
        hendrerit urna scelerisque. Pellentesque et efficitur libero. Curabitur
        at scelerisque lacus. Phasellus dictum tellus sit amet leo cursus
        porttitor. Quisque eu orci rhoncus, sagittis urna sed, commodo urna.
        Nunc eu ligula non dolor fermentum euismod. Aliquam id hendrerit eros.
        Nunc non aliquam nibh. Proin non turpis sed felis tristique maximus non
        in augue. Proin cursus, ligula non finibus ultricies, magna arcu
        porttitor ipsum, at rhoncus urna nisi id sapien. Integer hendrerit sem
        nunc, at pellentesque nunc lobortis suscipit. Phasellus dolor ipsum,
        lobortis ut ipsum ut, vehicula suscipit libero. Integer erat quam,
        imperdiet sed euismod id, consequat vel quam. Curabitur pharetra
        scelerisque augue a accumsan. Quisque faucibus eu est at viverra. Ut
        volutpat nec lacus id ullamcorper. Vestibulum viverra, purus quis
        sodales laoreet, dui leo semper sem, quis accumsan massa est non ipsum.
        In blandit convallis neque, id congue ligula eleifend quis. Donec magna
        est, dignissim sed felis quis, tempor pellentesque lacus. Praesent eu
        lobortis neque. Duis eu nisl ac elit condimentum lobortis et non mi.
        Maecenas vel neque a dui luctus elementum. Vivamus ac mauris et nulla
        malesuada tristique. Pellentesque quam ex, hendrerit ac efficitur eget,
        dictum bibendum tortor. Nulla iaculis gravida efficitur. Praesent
        volutpat non sapien vitae pretium. Vestibulum a rutrum arcu, non
        dignissim nulla. Quisque elementum lacinia nisi, non aliquet quam
        dignissim ac. Nullam in fermentum metus. Quisque lobortis auctor tellus,
        vel luctus orci fermentum nec. Aenean imperdiet, mauris nec iaculis
        dictum, augue metus molestie tortor, ac tempus arcu ligula ut metus.
        Cras malesuada erat nisi, aliquam euismod lectus lacinia in. Sed varius
        sed turpis at ultrices. Aenean pretium vehicula nisi id ultricies.
        Curabitur aliquet, leo ac pharetra laoreet, elit felis accumsan lectus,
        sed molestie metus augue quis est. Donec eu porttitor metus, sit amet
        blandit dui. Nullam ut nibh fermentum, aliquam odio at, vestibulum
        sapien. Nam tristique, est in consequat vulputate, lacus dolor ornare
        ex, in pulvinar ex ipsum vel nibh. Sed id consectetur est, dapibus
        bibendum dolor. Fusce commodo venenatis aliquet. Aliquam efficitur sem
        et nisl placerat, sit amet fermentum felis blandit. Aliquam nec risus
        sit amet magna ullamcorper suscipit in in mi. Nam ipsum nunc, volutpat
        sit amet tellus ut, porttitor eleifend libero. Vivamus rutrum non enim
        quis ultrices. Mauris id molestie urna. Nunc aliquet velit vitae auctor
        interdum. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Curabitur molestie tempor ligula.
        Maecenas in vehicula mi, ac lobortis odio. Maecenas fringilla lacus
        ultricies ex lobortis, sit amet tempor velit convallis. Mauris in odio
        sollicitudin, suscipit tortor a, dictum diam. Pellentesque blandit elit
        at nunc luctus, ut rhoncus felis elementum. Vestibulum quis ipsum id
        tellus congue vulputate nec ut tortor. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Duis varius posuere erat eget sagittis.
        Duis suscipit pretium congue. Vivamus tristique risus quam, non
        condimentum nibh finibus fringilla. Morbi at orci aliquam, placerat sem
        mollis, imperdiet enim. Aenean vitae consectetur ipsum. Quisque tempus
        consectetur velit, in iaculis urna interdum ut. Nullam scelerisque eu
        metus et iaculis. Quisque tristique nisl sed justo dapibus vestibulum.
        Nulla efficitur vel orci eu aliquam. Ut eu dolor tristique, ullamcorper
        metus eget, consectetur justo. Suspendisse potenti. Duis dapibus sodales
        massa quis rhoncus. Aliquam erat volutpat. Pellentesque aliquam lorem
        quis nulla ultricies, sit amet hendrerit urna scelerisque. Pellentesque
        et efficitur libero. Curabitur at scelerisque lacus. Phasellus dictum
        tellus sit amet leo cursus porttitor. Quisque eu orci rhoncus, sagittis
        urna sed, commodo urna. Nunc eu ligula non dolor fermentum euismod.
        Aliquam id hendrerit eros. Nunc non aliquam nibh. Proin non turpis sed
        felis tristique maximus non in augue. Proin cursus, ligula non finibus
        ultricies, magna arcu porttitor ipsum, at rhoncus urna nisi id sapien.
        Integer hendrerit sem nunc, at pellentesque nunc lobortis suscipit.
        Phasellus dolor ipsum, lobortis ut ipsum ut, vehicula suscipit libero.
        Integer erat quam, imperdiet sed euismod id, consequat vel quam.
        Curabitur pharetra scelerisque augue a accumsan. Quisque faucibus eu est
        at viverra. Ut volutpat nec lacus id ullamcorper. Vestibulum viverra,
        purus quis sodales laoreet, dui leo semper sem, quis accumsan massa est
        non ipsum. In blandit convallis neque, id congue ligula eleifend quis.
        Donec magna est, dignissim sed felis quis, tempor pellentesque lacus.
        Praesent eu lobortis neque. Duis eu nisl ac elit condimentum lobortis et
        non mi. Maecenas vel neque a dui luctus elementum. Vivamus ac mauris et
        nulla malesuada tristique. Pellentesque quam ex, hendrerit ac efficitur
        eget, dictum bibendum tortor. Nulla iaculis gravida efficitur. Praesent
        volutpat non sapien vitae pretium. Vestibulum a rutrum arcu, non
        dignissim nulla. Quisque elementum lacinia nisi, non aliquet quam
        dignissim ac. Nullam in fermentum metus. Quisque lobortis auctor tellus,
        vel luctus orci fermentum nec. Aenean imperdiet, mauris nec iaculis
        dictum, augue metus molestie tortor, ac tempus arcu ligula ut metus.
        Cras malesuada erat nisi, aliquam euismod lectus lacinia in. Sed varius
        sed turpis at ultrices. Aenean pretium vehicula nisi id ultricies.
        Curabitur aliquet, leo ac pharetra laoreet, elit felis accumsan lectus,
        sed molestie metus augue quis est. Donec eu porttitor metus, sit amet
        blandit dui. Nullam ut nibh fermentum, aliquam odio at, vestibulum
        sapien. Nam tristique, est in consequat vulputate, lacus dolor ornare
        ex, in pulvinar ex ipsum vel nibh. Sed id consectetur est, dapibus
        bibendum dolor. Fusce commodo venenatis aliquet. Aliquam efficitur sem
        et nisl placerat, sit amet fermentum felis blandit. Aliquam nec risus
        sit amet magna ullamcorper suscipit in in mi. Nam ipsum nunc, volutpat
        sit amet tellus ut, porttitor eleifend libero. Vivamus rutrum non enim
        quis ultrices. Mauris id molestie urna. Nunc aliquet velit vitae auctor
        interdum. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Curabitur molestie tempor ligula.
        Maecenas in vehicula mi, ac lobortis odio. Maecenas fringilla lacus
        ultricies ex lobortis, sit amet tempor velit convallis. Mauris in odio
        sollicitudin, suscipit tortor a, dictum diam. Pellentesque blandit elit
        at nunc luctus, ut rhoncus felis elementum. Vestibulum quis ipsum id
        tellus congue vulputate nec ut tortor. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Duis varius posuere erat eget sagittis.
        Duis suscipit pretium congue. Vivamus tristique risus quam, non
        condimentum nibh finibus fringilla. Morbi at orci aliquam, placerat sem
        mollis, imperdiet enim. Aenean vitae consectetur ipsum. Quisque tempus
        consectetur velit, in iaculis urna interdum ut. Nullam scelerisque eu
        metus et iaculis. Quisque tristique nisl sed justo dapibus vestibulum.
        Nulla efficitur vel orci eu aliquam. Ut eu dolor tristique, ullamcorper
        metus eget, consectetur justo. Suspendisse potenti. Duis dapibus sodales
        massa quis rhoncus. Aliquam erat volutpat. Pellentesque aliquam lorem
        quis nulla ultricies, sit amet hendrerit urna scelerisque. Pellentesque
        et efficitur libero. Curabitur at scelerisque lacus. Phasellus dictum
        tellus sit amet leo cursus porttitor. Quisque eu orci rhoncus, sagittis
        urna sed, commodo urna. Nunc eu ligula non dolor fermentum euismod.
        Aliquam id hendrerit eros. Nunc non aliquam nibh. Proin non turpis sed
        felis tristique maximus non in augue. Proin cursus, ligula non finibus
        ultricies, magna arcu porttitor ipsum, at rhoncus urna nisi id sapien.
        Integer hendrerit sem nunc, at pellentesque nunc lobortis suscipit.
        Phasellus dolor ipsum, lobortis ut ipsum ut, vehicula suscipit libero.
        Integer erat quam, imperdiet sed euismod id, consequat vel quam.
        Curabitur pharetra scelerisque augue a accumsan. Quisque faucibus eu est
        at viverra. Ut volutpat nec lacus id ullamcorper. Vestibulum viverra,
        purus quis sodales laoreet, dui leo semper sem, quis accumsan massa est
        non ipsum. In blandit convallis neque, id congue ligula eleifend quis.
        Donec magna est, dignissim sed felis quis, tempor pellentesque lacus.
        Praesent eu lobortis neque. Duis eu nisl ac elit condimentum lobortis et
        non mi. Maecenas vel neque a dui luctus elementum. Vivamus ac mauris et
        nulla malesuada tristique. Pellentesque quam ex, hendrerit ac efficitur
        eget, dictum bibendum tortor. Nulla iaculis gravida efficitur. Praesent
        volutpat non sapien vitae pretium. Vestibulum a rutrum arcu, non
        dignissim nulla. Quisque elementum lacinia nisi, non aliquet quam
        dignissim ac. Nullam in fermentum metus. Quisque lobortis auctor tellus,
        vel luctus orci fermentum nec. Aenean imperdiet, mauris nec iaculis
        dictum, augue metus molestie tortor, ac tempus arcu ligula ut metus.
        Cras malesuada erat nisi, aliquam euismod lectus lacinia in. Sed varius
        sed turpis at ultrices. Aenean pretium vehicula nisi id ultricies.
        Curabitur aliquet, leo ac pharetra laoreet, elit felis accumsan lectus,
        sed molestie metus augue quis est. Donec eu porttitor metus, sit amet
        blandit dui. Nullam ut nibh fermentum, aliquam odio at, vestibulum
        sapien. Nam tristique, est in consequat vulputate, lacus dolor ornare
        ex, in pulvinar ex ipsum vel nibh. Sed id consectetur est, dapibus
        bibendum dolor. Fusce commodo venenatis aliquet. Aliquam efficitur sem
        et nisl placerat, sit amet fermentum felis blandit. Aliquam nec risus
        sit amet magna ullamcorper suscipit in in mi. Nam ipsum nunc, volutpat
        sit amet tellus ut, porttitor eleifend libero. Vivamus rutrum non enim
        quis ultrices. Mauris id molestie urna. Nunc aliquet velit vitae auctor
        interdum. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Curabitur molestie tempor ligula.
        Maecenas in vehicula mi, ac lobortis odio. Maecenas fringilla lacus
        ultricies ex lobortis, sit amet tempor velit convallis. Mauris in odio
        sollicitudin, suscipit tortor a, dictum diam. Pellentesque blandit elit
        at nunc luctus, ut rhoncus felis elementum. Vestibulum quis ipsum id
        tellus congue vulputate nec ut tortor. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Duis varius posuere erat eget sagittis.
        Duis suscipit pretium congue. Vivamus tristique risus quam, non
        condimentum nibh finibus fringilla. Morbi at orci aliquam, placerat sem
        mollis, imperdiet enim. Aenean vitae consectetur ipsum. Quisque tempus
        consectetur velit, in iaculis urna interdum ut. Nullam scelerisque eu
        metus et iaculis. Quisque tristique nisl sed justo dapibus vestibulum.
        Nulla efficitur vel orci eu aliquam. Ut eu dolor tristique, ullamcorper
        metus eget, consectetur justo. Suspendisse potenti. Duis dapibus sodales
        massa quis rhoncus. Aliquam erat volutpat. Pellentesque aliquam lorem
        quis nulla ultricies, sit amet hendrerit urna scelerisque. Pellentesque
        et efficitur libero. Curabitur at scelerisque lacus. Phasellus dictum
        tellus sit amet leo cursus porttitor. Quisque eu orci rhoncus, sagittis
        urna sed, commodo urna. Nunc eu ligula non dolor fermentum euismod.
        Aliquam id hendrerit eros. Nunc non aliquam nibh. Proin non turpis sed
        felis tristique maximus non in augue. Proin cursus, ligula non finibus
        ultricies, magna arcu porttitor ipsum, at rhoncus urna nisi id sapien.
        Integer hendrerit sem nunc, at pellentesque nunc lobortis suscipit.
        Phasellus dolor ipsum, lobortis ut ipsum ut, vehicula suscipit libero.
        Integer erat quam, imperdiet sed euismod id, consequat vel quam.
        Curabitur pharetra scelerisque augue a accumsan. Quisque faucibus eu est
        at viverra. Ut volutpat nec lacus id ullamcorper. Vestibulum viverra,
        purus quis sodales laoreet, dui leo semper sem, quis accumsan massa est
        non ipsum. In blandit convallis neque, id congue ligula eleifend quis.
        Donec magna est, dignissim sed felis quis, tempor pellentesque lacus.
        Praesent eu lobortis neque. Duis eu nisl ac elit condimentum lobortis et
        non mi. Maecenas vel neque a dui luctus elementum. Vivamus ac mauris et
        nulla malesuada tristique. Pellentesque quam ex, hendrerit ac efficitur
        eget, dictum bibendum tortor. Nulla iaculis gravida efficitur. Praesent
        volutpat non sapien vitae pretium. Vestibulum a rutrum arcu, non
        dignissim nulla. Quisque elementum lacinia nisi, non aliquet quam
        dignissim ac. Nullam in fermentum metus. Quisque lobortis auctor tellus,
        vel luctus orci fermentum nec. Aenean imperdiet, mauris nec iaculis
        dictum, augue metus molestie tortor, ac tempus arcu ligula ut metus.
        Cras malesuada erat nisi, aliquam euismod lectus lacinia in. Sed varius
        sed turpis at ultrices. Aenean pretium vehicula nisi id ultricies.
        Curabitur aliquet, leo ac pharetra laoreet, elit felis accumsan lectus,
        sed molestie metus augue quis est. Donec eu porttitor metus, sit amet
        blandit dui. Nullam ut nibh fermentum, aliquam odio at, vestibulum
        sapien. Nam tristique, est in consequat vulputate, lacus dolor ornare
        ex, in pulvinar ex ipsum vel nibh. Sed id consectetur est, dapibus
        bibendum dolor. Fusce commodo venenatis aliquet. Aliquam efficitur sem
        et nisl placerat, sit amet fermentum felis blandit. Aliquam nec risus
        sit amet magna ullamcorper suscipit in in mi. Nam ipsum nunc, volutpat
        sit amet tellus ut, porttitor eleifend libero. Vivamus rutrum non enim
        quis ultrices. Mauris id molestie urna. Nunc aliquet velit vitae auctor
        interdum. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Curabitur molestie tempor ligula.
        Maecenas in vehicula mi, ac lobortis odio. Maecenas fringilla lacus
        ultricies ex lobortis, sit amet tempor velit convallis. Mauris in odio
        sollicitudin, suscipit tortor a, dictum diam. Pellentesque blandit elit
        at nunc luctus, ut rhoncus felis elementum. Vestibulum quis ipsum id
        tellus congue vulputate nec ut tortor.
      </p>
    </div>
  );
}
export default ModalPages;
